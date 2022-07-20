import { CryptoHookFactory } from "@_types/hooks";
import { Nft } from "@_types/nft";
import { ethers } from "ethers";
import { useCallback } from "react";
import useSWR from "swr";
import { toast } from "react-toastify";

type UseListedNftsResponse = {
    buyNft: (token: number, value: number) => Promise<void>;
    listNft: (tokenId: number, price: number) => Promise<void>;
    start: (tokenId: number) => Promise<void>;
    end: (tokenId: number) => Promise<void>;
    bid: (tokenId: number, price: number) => Promise<void>;
};
type GetNftsItemHookFactory = CryptoHookFactory<Nft, GetNftsItemResponse>;

export type UseGetNftsItemHook = ReturnType<GetNftsItemHookFactory>;

export const hookFactory: GetNftsItemHookFactory =
    ({ contract }) =>
        (tokenId) => {
            const { data, ...swr } = useSWR(
                contract ? "web3/useGetNftItem" : null,
                async () => {
                    const nft = {} as Nft;
                    const coreNfts = await contract!.getNftItem(tokenId);

                    let transactions = [];
                    let endAt = 0;
                    let startPrice = 0;
                    let highestPrice = 0;
                    let highestBidder = '';
                    let bidOwner = '';
                    try {
                        const topics = contract.filters.NftTransactions();
                        const events = await contract.queryFilter(topics);
                        endAt = await contract.getEndAtById(tokenId);
                        startPrice = await contract.getStartPriceById(tokenId);
                        highestPrice = await contract.getHighestPriceById(tokenId);
                        highestBidder = await contract.getHighestBidderById(tokenId);
                        bidOwner = await contract.getBidOwner(tokenId);

                        for (let i = 0; i < events.length; i++) {
                            if (parseInt(events[i].args.tokenId) == tokenId) {
                                let transaction = {
                                    tokenId: parseInt(events[i].args.tokenId),
                                    price: parseFloat(
                                        ethers.utils.formatEther(events[i].args.price)
                                    ),
                                    from: events[i].args.from,
                                    to: events[i].args.to,
                                    time: new Date(
                                        parseInt(events[i].args.time)
                                    ).toLocaleTimeString("en-US"),
                                };
                                transactions.push(transaction);
                            }
                        }
                    } catch (e) {
                        console.log(e);
                    }

                    const item = coreNfts;
                    const tokenURI = await contract!.tokenURI(tokenId);
                    const metaRes = await fetch(tokenURI);
                    const meta = await metaRes.json();

                    nft.price = parseFloat(ethers.utils.formatEther(item.price));
                    nft.tokenId = item.tokenId.toNumber();
                    nft.creator = item.creator;
                    nft.owner = item.owner;
                    nft.isListed = item.isListed;
                    nft.meta = meta;
                    nft.transactions = transactions;
                    nft.endAt = parseInt(endAt);
                    nft.startPrice = parseFloat(
                        ethers.utils.formatEther(startPrice)
                    );
                    nft.highestPrice = parseFloat(
                        ethers.utils.formatEther(highestPrice)
                    );
                    nft.highestBidder = highestBidder;
                    nft.bidOwner = bidOwner;

                    return nft;
                }
            );
            const _contract = contract;

            const start = useCallback(
                async (tokenId: number, startPrice: number, countDown: number) => {
                    try {
                        const result = await _contract!.start(tokenId, Date.now(), ethers.utils.parseEther(startPrice.toString()), countDown);

                        await toast.promise(result!.wait(), {
                            pending: "Processing transaction",
                            success: "Nft is yours! Go to Profile page",
                            error: "Processing error",
                        });
                        location.reload();
                    } catch (e: any) {
                        alert(e);
                    }
                },
                [_contract]
            );

            const end = useCallback(
                async (tokenId: number) => {
                    try {
                        const result = await _contract!.end(tokenId, Date.now());

                        await toast.promise(result!.wait(), {
                            pending: "Processing transaction",
                            success: "Nft is yours! Go to Profile page",
                            error: "Processing error",
                        });
                    } catch (e: any) {
                        alert(e.data.message);
                    }
                },
                [_contract]
            );

            const bid = useCallback(
                async (tokenId: number, value: number) => {
                    try {
                        const result = await _contract!.bid(tokenId, Date.now(), {
                            value: ethers.utils.parseEther(value.toString()),
                        });

                        await toast.promise(result!.wait(), {
                            pending: "Processing transaction",
                            success: "Nft is yours! Go to Profile page",
                            error: "Processing error",
                        });
                    } catch (e: any) {
                        alert(e.data.message);
                    }
                },
                [_contract]
            );

            const buyNft = useCallback(
                async (tokenId: number, value: number) => {
                    try {
                        const result = await _contract!.buyNft(tokenId, {
                            value: ethers.utils.parseEther(value.toString()),
                        });

                        await toast.promise(result!.wait(), {
                            pending: "Processing transaction",
                            success: "Nft is yours! Go to Profile page",
                            error: "Processing error",
                        });
                    } catch (e: any) {
                        console.error(e.message);
                    }
                },
                [_contract]
            );

            const listNft = useCallback(
                async (tokenId: number, price: number) => {
                    try {
                        const result = await _contract!.placeNftOnSale(
                            tokenId,
                            ethers.utils.parseEther(price.toString()),
                            {
                                value: ethers.utils.parseEther((0.025).toString()),
                            }
                        );

                        await toast.promise(result!.wait(), {
                            pending: "Processing transaction",
                            success: "Item has been listed",
                            error: "Processing error",
                        });
                        location.reload();
                    } catch (e: any) {
                        console.error(e.message);
                    }
                },
                [_contract]
            );

            const unListNft = useCallback(
                async (tokenId: number, price: number) => {
                    try {
                        const result = await _contract!.unListNft(tokenId);

                        await toast.promise(result!.wait(), {
                            pending: "Processing un list NFT",
                            success: "Item has been unlisted",
                            error: "Processing error",
                        });
                        location.reload();
                    } catch (e: any) {
                        console.error(e.message);
                    }
                },
                [_contract]
            );
            return {
                ...swr,
                buyNft,
                listNft,
                unListNft,
                start,
                end,
                bid,
                data: data,
            };
        };
