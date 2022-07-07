import { NextPage, GetServerSideProps } from "next";
import { BaseLayout } from "@ui/index";
import { useGetNftItem } from '@hooks/web3';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import { ChangeEvent, useState } from "react";

// export const getServerSideProps: GetServerSideProps = async (context) => {


//     // does not allow access to page if not logged in 
//     if( false) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         }
//     } return {
//         props: {}, // will be passed to the page component as props
//       }
// }

const NftDetail: NextPage = () => {
    const router = useRouter()
    const pid = router.query
    let nft = useGetNftItem(pid.tokenId);
    let transactions = nft?.nfts?.data?.transactions
    let time = nft?.nfts?.data?.time
    const [price, setPrice] = useState("");

    const renderTransactions = () => {
        return (
            transactions?.map((t, i) =>
                <div key={i}>
                    <div className="p_list">
                        <div className="p_list_pp">
                            <a href="author.html">
                                <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                <i className="fa fa-check" />
                            </a>
                        </div>
                        <div className="p_list_info">
                            <b>{t.price} ETH</b>
                            <span>from <b>{t.from}</b></span>
                            <span>to <b>{t.to}</b></span>
                            <span>at <b>{t.time}</b></span>
                        </div>
                    </div>
                </div>
            )
        )
    }
    const renderListButton = () => {
        if (!nft.nfts.data.isListed) {
            return (
                <a href="#"
                    className="btn-main btn-lg btn-light"
                    onClick={() => { nft?.nfts?.listNft(nft?.nfts?.data?.tokenId, nft?.nfts?.data?.price) }}>
                    List Nft
                </a>
            )
        }
    }
    const renderContent = () => {
        if (nft.nfts.data) {
            return (
                <BaseLayout>
                    <div className="no-bottom no-top" id="content">
                        <div id="top" />
                        {/* section begin */}
                        <section id="profile_banner" aria-label="section" className="text-light" style={{ backgroundImage: "url(../images/background/subheader.jpg)", minHeight: "88px", padding: "44px 0 44px 0" }}>
                        </section>
                        {/* section close */}
                        <section aria-label="section" className="d_coll ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <img src={nft?.nfts?.data?.meta?.image} className="img-fluid img-rounded mb-sm-30" alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item_info">
                                            Auctions ends in {time.minute}m {time.second}s
                                            <h2>{nft?.nfts?.data?.meta?.name}</h2>
                                            <div className="item_info_counts">
                                                <div className="item_info_type"><i className="fa fa-image" />Art</div>
                                                <div className="item_info_views"><i className="fa fa-eye" />250</div>
                                                <div className="item_info_like"><i className="fa fa-heart" />18</div>
                                            </div>
                                            <p>{nft?.nfts?.data?.meta?.description}</p>
                                            <div className="de_tab tab_simple">
                                                <div className="de_tab_content">
                                                    {renderTransactions()}
                                                </div>
                                                <div className="spacer-20" />
                                                {/* Button trigger modal */}
                                                <a href="#"
                                                    style={{ 'marginLeft': '30px' }}
                                                    className="btn-main btn-lg"
                                                    onClick={() => { nft?.nfts?.buyNft(nft?.nfts?.data?.tokenId, nft?.nfts?.data?.price) }}>
                                                    Buy Now
                                                </a>

                                                <a href="#"
                                                    style={{ 'marginLeft': '30px' }}
                                                    className="btn-main btn-lg"
                                                    onClick={() => { nft?.nfts?.start(nft?.nfts?.data?.tokenId) }}>
                                                    Start
                                                </a>

                                                <a href="#"
                                                    style={{ 'marginLeft': '30px' }}
                                                    className="btn-main btn-lg"
                                                    onClick={() => { nft?.nfts?.end(nft?.nfts?.data?.tokenId) }}>
                                                    End
                                                </a>

                                                <a href="#"
                                                    style={{ 'marginLeft': '30px' }}
                                                    className="btn-main btn-lg"
                                                    onClick={() => { nft?.nfts?.bid(nft?.nfts?.data?.tokenId, price) }}>
                                                    Bid
                                                </a>
                                                <input
                                                    type="text"
                                                    name="price"
                                                    style={{ 'marginTop': '30px' }}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    id="price"
                                                    className="form-control"
                                                    placeholder="Price"
                                                />
                                                &nbsp;
                                                {renderListButton()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </BaseLayout>
            );
        } else {
            if (nft.nfts.error) {
                router.push("/")
            }
            return (<div>Loading...</div>)
        }
    }

    return (<>
        {renderContent()}</>
    )

};

export default NftDetail;

