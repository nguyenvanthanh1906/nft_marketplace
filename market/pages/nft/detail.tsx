import { NextPage, GetServerSideProps } from "next";
import { BaseLayout } from "@ui/index";
import { useGetNftItem } from '@hooks/web3';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react';

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
                                            Auctions ends in <div className="de_countdown" data-year={2021} data-month={11} data-day={16} data-hour={8} />
                                            <h2>{nft?.nfts?.data?.meta?.name}</h2>
                                            <div className="item_info_counts">
                                                <div className="item_info_type"><i className="fa fa-image" />Art</div>
                                                <div className="item_info_views"><i className="fa fa-eye" />250</div>
                                                <div className="item_info_like"><i className="fa fa-heart" />18</div>
                                            </div>
                                            <p>{nft?.nfts?.data?.meta?.description}</p>
                                            <h6>Creator</h6>
                                            <div className="item_author">
                                                <div className="author_list_pp">
                                                    <a href="author.html">
                                                        <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                        <i className="fa fa-check" />
                                                    </a>
                                                </div>
                                                <div className="author_list_info">
                                                    <a href="author.html">Monica Lucas</a>
                                                </div>
                                            </div>
                                            <div className="spacer-40" />
                                            <div className="de_tab tab_simple">
                                                <ul className="de_nav">
                                                    <li className="active"><span>Buy</span></li>
                                                    <li ><span>List</span></li>
                                                </ul>
                                                <div className="de_tab_content">
                                                    <div className="tab-1">
                                                        <div className="p_list">
                                                            <div className="p_list_pp">
                                                                <a href="author.html">
                                                                    <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                                    <i className="fa fa-check" />
                                                                </a>
                                                            </div>
                                                            <div className="p_list_info">
                                                                Bid accepted <b>0.005 ETH</b>
                                                                <span>by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM</span>
                                                            </div>
                                                        </div>
                                                        <div className="p_list">
                                                            <div className="p_list_pp">
                                                                <a href="author.html">
                                                                    <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                                    <i className="fa fa-check" />
                                                                </a>
                                                            </div>
                                                            <div className="p_list_info">
                                                                Bid <b>0.005 ETH</b>
                                                                <span>by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM</span>
                                                            </div>
                                                        </div>
                                                        <div className="p_list">
                                                            <div className="p_list_pp">
                                                                <a href="author.html">
                                                                    <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                                                    <i className="fa fa-check" />
                                                                </a>
                                                            </div>
                                                            <div className="p_list_info">
                                                                Bid <b>0.004 ETH</b>
                                                                <span>by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM</span>
                                                            </div>
                                                        </div>
                                                        <div className="p_list">
                                                            <div className="p_list_pp">
                                                                <a href="author.html">
                                                                    <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                                    <i className="fa fa-check" />
                                                                </a>
                                                            </div>
                                                            <div className="p_list_info">
                                                                Bid <b>0.003 ETH</b>
                                                                <span>by <b>Lori Hart</b> at 6/12/2021, 12:57 AM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-2">
                                                        <div className="p_list">
                                                            <div className="p_list_pp">
                                                                <a href="author.html">
                                                                    <img className="lazy" src="images/author/author-5.jpg" alt="" />
                                                                    <i className="fa fa-check" />
                                                                </a>
                                                            </div>
                                                            <div className="p_list_info">
                                                                Bid <b>0.005 ETH</b>
                                                                <span>by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM</span>
                                                            </div>
                                                        </div>
                                                        <div className="p_list">
                                                            <div className="p_list_pp">
                                                                <a href="author.html">
                                                                    <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                                    <i className="fa fa-check" />
                                                                </a>
                                                            </div>
                                                            <div className="p_list_info">
                                                                Bid accepted <b>0.005 ETH</b>
                                                                <span>by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM</span>
                                                            </div>
                                                        </div>
                                                        <div className="p_list">
                                                            <div className="p_list_pp">
                                                                <a href="author.html">
                                                                    <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                                    <i className="fa fa-check" />
                                                                </a>
                                                            </div>
                                                            <div className="p_list_info">
                                                                Bid <b>0.005 ETH</b>
                                                                <span>by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM</span>
                                                            </div>
                                                        </div>
                                                        <div className="p_list">
                                                            <div className="p_list_pp">
                                                                <a href="author.html">
                                                                    <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                                                    <i className="fa fa-check" />
                                                                </a>
                                                            </div>
                                                            <div className="p_list_info">
                                                                Bid <b>0.004 ETH</b>
                                                                <span>by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM</span>
                                                            </div>
                                                        </div>
                                                        <div className="p_list">
                                                            <div className="p_list_pp">
                                                                <a href="author.html">
                                                                    <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                                                    <i className="fa fa-check" />
                                                                </a>
                                                            </div>
                                                            <div className="p_list_info">
                                                                Bid <b>0.003 ETH</b>
                                                                <span>by <b>Lori Hart</b> at 6/12/2021, 12:57 AM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="spacer-10" />
                                                {/* Button trigger modal */}
                                                <a href="#"
                                                    className="btn-main btn-lg"
                                                    onClick={() => { nft?.nfts?.buyNft(nft?.nfts?.data?.tokenId, nft?.nfts?.data?.price) }}>
                                                    Buy Now
                                                </a>
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

