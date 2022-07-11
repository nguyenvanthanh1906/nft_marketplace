import { NextPage, GetServerSideProps } from "next";
import { BaseLayout } from "@ui/index";
import { useGetNftItem } from '@hooks/web3';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import { ChangeEvent, useState } from "react";
import Countdown from 'react-countdown';
import { useAccount, useNetwork } from '@hooks/web3';

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
    const { account } = useAccount();
    const router = useRouter()
    const pid = router.query
    let nft = useGetNftItem(pid.tokenId);
    let transactions = nft?.nfts?.data?.transactions
    let endAt = nft?.nfts?.data?.endAt
    let startPrice = nft?.nfts?.data?.startPrice
    let highestPrice = nft?.nfts?.data?.highestPrice
    let highestBidder = nft?.nfts?.data?.highestBidder
    let bidOwner = nft?.nfts?.data?.bidOwner
    const [price, setPrice] = useState("");
    const [listPrice, setListPrice] = useState("");
    const [startPriceInput, setStartPriceInput] = useState("");
    const [countDown, setCountDown] = useState("");
    console.log(nft)
    const renderTransactions = () => {
        return (
            transactions?.map((t, i) =>
                <div key={i}>
                    <div className="p_list">
                        <div className="p_list_pp">
                            <a href="author.html">
                                <span aria-hidden="true" className="fa fa-check" style={{ 'marginLeft': '40px' }}></span>
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
    const renderModal = (func, tokenId, value, setState, nameModal) => {
        return (
            <div className="modal fade" id={nameModal} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Setting price</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                name="listPriceInput"
                                style={{ 'marginTop': '30px' }}
                                onChange={(e) => setState(e.target.value)}
                                id="listPriceInput"
                                className="form-control"
                                placeholder="Price"
                            />
                            {nameModal == 'startModal'
                                ? <input
                                    type="text"
                                    name="time"
                                    style={{ 'marginTop': '30px' }}
                                    onChange={(e) => setCountDown(e.target.value)}
                                    id="time"
                                    className="form-control"
                                    placeholder="Time"
                                />
                                : <></>
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {nameModal == 'startModal'
                                ? <button type="button" className="btn btn-primary" onClick={() => { func(tokenId, value, countDown) }}>Confirm</button>
                                : <button type="button" className="btn btn-primary" onClick={() => { func(tokenId, value) }}>Confirm</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
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
                                            {endAt > Date.now() ? <div>Auctions ends in <Countdown date={endAt} /></div> : <div></div>}
                                            <h2>{nft?.nfts?.data?.meta?.name}</h2>
                                            <div className="item_info_counts">
                                                <div><b>Creator:</b> {nft?.nfts?.data?.creator}</div>
                                            </div>
                                            <div className="item_info_counts">
                                                <div><b>Owner:</b> {nft?.nfts?.data?.owner}</div>
                                            </div>
                                            {
                                                startPrice == 0
                                                    ? <div className="item_info_counts"><h3>Price: {nft?.nfts?.data?.price} ETH</h3> </div>
                                                    : <div className="item_info_counts"><h3>Start price: {startPrice} ETH</h3></div>
                                            }
                                            {
                                                startPrice != 0
                                                    ? <div className="item_info_counts"><div><b>Highest price:</b> {highestPrice} ETH</div> </div>
                                                    : <></>
                                            }
                                            {
                                                startPrice != 0
                                                    ? <div className="item_info_counts">
                                                        <div><b>Highest bidder:</b> {highestBidder}</div>
                                                    </div>
                                                    : <></>
                                            }
                                            <p>{nft?.nfts?.data?.meta?.description}</p>
                                            <div className="de_tab tab_simple">
                                                <div className="de_tab_content">
                                                    {renderTransactions()}
                                                </div>
                                                <div className="spacer-20" />
                                                {/* Button trigger modal */}
                                                {account.data != nft?.nfts?.data?.owner && nft?.nfts?.data?.startPrice == 0 && nft.nfts.data.isListed ? <a href="#"
                                                    style={{ 'marginLeft': '30px' }}
                                                    className="btn-main btn-lg btn-light"
                                                    onClick={() => { nft?.nfts?.buyNft(nft?.nfts?.data?.tokenId, nft?.nfts?.data?.price) }}>
                                                    Buy Now
                                                </a> : <div></div>}
                                                {account.data == nft?.nfts?.data?.owner && !nft.nfts.data.isListed && nft?.nfts?.data?.startPrice == 0 ?
                                                    <><a href="#"
                                                        style={{ 'marginLeft': '30px' }}
                                                        className="btn-main btn-lg"
                                                        data-bs-toggle="modal" data-bs-target="#startModal"
                                                    >
                                                        Start
                                                    </a>
                                                        {renderModal(nft?.nfts?.start, nft?.nfts?.data?.tokenId, startPriceInput, setStartPriceInput, 'startModal')}
                                                    </>
                                                    : <></>}
                                                {(account.data == bidOwner || account.data == highestBidder) && !nft.nfts.data.isListed && nft?.nfts?.data?.startPrice > 0 && nft?.nfts?.data?.endAt < Date.now() ?
                                                    <a href="#"
                                                        style={{ 'marginLeft': '30px' }}
                                                        className="btn-main btn-lg btn-light"
                                                        onClick={() => { nft?.nfts?.end(nft?.nfts?.data?.tokenId) }}>
                                                        End
                                                    </a> : <></>}
                                                {account.data != nft?.nfts?.data?.owner && nft?.nfts?.data?.endAt > Date.now() && account.data != bidOwner ?
                                                    <><a href="#"
                                                        style={{ 'marginLeft': '30px' }}
                                                        className="btn-main btn-lg"
                                                        data-bs-toggle="modal" data-bs-target="#bidModal"
                                                    >
                                                        Bid
                                                    </a>
                                                        {renderModal(nft?.nfts?.bid, nft?.nfts?.data?.tokenId, price, setPrice, 'bidModal')}
                                                    </> : <></>}
                                                {account.data == nft?.nfts?.data?.owner
                                                    ? !nft.nfts.data.isListed
                                                        ? <>
                                                            <a href="#"
                                                                style={{ 'marginLeft': '30px' }}
                                                                className="btn-main btn-lg btn-light"
                                                                data-bs-toggle="modal" data-bs-target="#listModal"
                                                            >
                                                                List Nft
                                                            </a>
                                                            {renderModal(nft?.nfts?.listNft, nft?.nfts?.data?.tokenId, listPrice, setListPrice, 'listModal')}
                                                        </>
                                                        : <a href="#"
                                                            style={{ 'marginLeft': '30px' }}
                                                            className="btn-main btn-lg btn-light"
                                                            onClick={() => { nft?.nfts?.unListNft(nft?.nfts?.data?.tokenId) }}>
                                                            Un List Nft
                                                        </a>
                                                    : <></>
                                                }
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

