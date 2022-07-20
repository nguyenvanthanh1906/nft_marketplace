import NextPage from "next";
import { BaseLayout } from "@ui/index";
import { ChangeEvent, useState } from "react";
import { NftMeta } from "@_types/nft";
import axios from "axios";
import { useWeb3 } from "@providers/web3";
import { NftMeta, PinataRes } from '@_types/nft';
import { ethers } from 'ethers';
import { toast } from "react-toastify";
import { useNetwork } from '@hooks/web3';

const ALLOWED_FIELDS = ["name", "description", "image", "likes"];

const NftCreate: NextPage = () => {
  const { ethereum, contract } = useWeb3();
  const [nftURI, setNftURI] = useState("");
  const [price, setPrice] = useState("");
  const { network } = useNetwork();
  const [hasURI, setHasURI] = useState(false);
  const [nftMeta, setNftMeta] = useState<NftMeta>({
    name: "",
    description: "",
    image: "",
    likes: 0,
  });

  const getSignedData = async () => {
    const messageToSign = await axios.get("/api/verify");
    const accounts = (await ethereum?.request({
      method: "eth_requestAccounts",
    })) as string[];
    const account = accounts[0];

    const signedData = await ethereum?.request({
      method: "personal_sign",
      params: [
        JSON.stringify(messageToSign.data),
        account,
        messageToSign.data.id,
      ],
    });

    return { signedData, account };
  };

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error("Select a file");
      return;
    }

    const file = e.target.files[0];
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    try {
      const { signedData, account } = await getSignedData();
      const promise = axios.post("/api/verify-image", {
        address: account,
        signature: signedData,
        bytes,
        contentType: file.type,
        fileName: file.name.replace(/\.[^/.]+$/, "")
      });
      const res = await toast.promise(
        promise, {
        pending: "Uploading image",
        success: "Image uploaded",
        error: "Image upload error"
      }
      )

      const data = res.data as PinataRes;

      setNftMeta({
        ...nftMeta,
        image: `${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${data.IpfsHash}`
      });
    } catch (e: any) {
      console.error(e.message);
    }
  };

  const uploadImage = () => {
    document.getElementById("file-upload").click();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNftMeta({ ...nftMeta, [name]: value });
  };

  const uploadMetadata = async () => {
    try {
      const { signedData, account } = await getSignedData();

      const promise = axios.post("/api/verify", {
        address: account,
        signature: signedData,
        nft: nftMeta,
      });
      const res = await toast.promise(
        promise, {
        pending: "Uploading metadata",
        success: "Metadata uploaded",
        error: "Metadata upload error"
      }
      )

      const data = res.data as PinataRes;
      setNftURI(`${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${data.IpfsHash}`);
    } catch (e: any) {
      console.error(e.message);
    }
  };

  const createNft = async () => {
    try {
      const nftRes = await axios({
        method: 'get',
        url: nftURI,
        withCredentials: false,
      });
      const content = nftRes.data;

      Object.keys(content).forEach(key => {
        if (!ALLOWED_FIELDS.includes(key)) {
          throw new Error("Invalid Json structure");
        }
      })

      const tx = await contract?.mintToken(
        nftURI,
        ethers.utils.parseEther(price), {
        value: ethers.utils.parseEther(0.025.toString())
      }
      );

      await toast.promise(
        tx!.wait(), {
        pending: "Uploading metadata",
        success: "Metadata uploaded",
        error: "Metadata upload error"
      }
      );
    } catch (e: any) {
      console.error(e.message);
    }
  }
  if (!network.isConnectedToNetwork) {
    return (
      <div className="container-warning">
        <div className="container-warning-content">
          <div className="">
            <div className="horizonal-warning">
              <span aria-hidden="true" className="icon_error-triangle_alt icon-warning"></span>
              <div className="title-warning">Attention needed</div>
            </div>
            <div className="">
              <p>
                {network.isLoading ?
                  "Loading..." :
                  `Connect to ${network.targetNetwork}`
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <BaseLayout>
      <div className="no-bottom no-top" id="content">
        <div id="top" />
        {/* section begin */}
        <section
          id="subheader"
          className="text-light"
          style={{ backgroundImage: "url(../images/background/subheader.jpg)" }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Create Collectible</h1>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </section>
        {/* section close */}
        {/* section begin */}
        <section aria-label="section">
          <div className="container">
            <div className="row wow fadeIn">
              <div className="col-lg-7 offset-lg-1">
                <form
                  id="form-create-item"
                  className="form-border"
                  method="post"
                  action="email.php"
                >
                  <div className="field-set">
                    <h5>Upload file</h5>
                    <div className="d-create-file">
                      <p id="file_name">
                        PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                      </p>
                      <input
                        type="button"
                        id="get_file"
                        className="btn-main"
                        defaultValue="Browse"
                        onClick={uploadImage}
                      />
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        hidden
                        onChange={handleImage}
                      />
                    </div>
                    <div className="spacer-40" />
                    <h5>Title</h5>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={nftMeta.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Title"
                    />
                    <div className="spacer-20" />
                    <h5>Description</h5>
                    <textarea
                      value={nftMeta.description}
                      onChange={handleChange}
                      data-autoresize
                      name="description"
                      id="description"
                      className="form-control"
                      placeholder="Description"
                    />
                    <input
                      onClick={uploadMetadata}
                      type="button"
                      id="submit"
                      disabled={nftMeta.description ? false : true}
                      className="btn-main"
                      defaultValue="Upload Metadata"
                    />
                    <div className="spacer-20" />
                    <h5>URI</h5>
                    <input
                      type="text"
                      name="uri"
                      id="uri"
                      className="form-control"
                      placeholder="URI"
                      defaultValue={nftURI}
                    />
                    <h5>Price</h5>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      className="form-control"
                      placeholder="Price"
                    />
                    <div className="spacer-single" />
                    <input
                      onClick={createNft}
                      type="button"
                      id="submit"
                      className="btn-main"
                      defaultValue="Create Item"
                    />
                    <div className="spacer-single" />
                  </div>
                </form>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <h5>Preview item</h5>
                <div className="nft__item">
                  <div
                    className="de_countdown"
                    data-year={2021}
                    data-month={11}
                    data-day={16}
                    data-hour={8}
                  />
                  <div className="author_list_pp">
                    <a href="#">
                      <img
                        className="lazy"
                        src="../images/author/author-1.jpg"
                        alt=""
                      />
                      <i className="fa fa-check" />
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="#">

                      {nftMeta.image ?
                        <img src={nftMeta.image} alt="" className="h-40" /> : <img
                          src="../images/collections/coll-item-3.jpg"
                          id="get_file_2"
                          className="lazy nft__item_preview"
                          alt=""
                        />}
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="#">
                      <h4>Pinky Ocean</h4>
                    </a>
                    <div className="nft__item_click">
                      <span />
                    </div>
                    <div className="nft__item_price">
                      0.08 ETH<span>1/20</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart" />
                      <span>50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};

export default NftCreate;
