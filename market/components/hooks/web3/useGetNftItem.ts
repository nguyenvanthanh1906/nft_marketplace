import { CryptoHookFactory } from "@_types/hooks";
import { Nft } from "@_types/nft";
import { ethers } from "ethers";
import { useCallback } from "react";
import useSWR from "swr";
import { toast } from "react-toastify";

type UseListedNftsResponse = {
    buyNft: (token: number, value: number) => Promise<void>
    listNft: (tokenId: number, price: number) => Promise<void>
}
type GetNftsItemHookFactory = CryptoHookFactory<Nft, GetNftsItemResponse>

export type UseGetNftsItemHook = ReturnType<GetNftsItemHookFactory>

export const hookFactory: GetNftsItemHookFactory = ({ contract }) => (tokenId) => {
    const { data, ...swr } = useSWR(
        contract ? "web3/useGetNftItem" : null,
        async () => {
            const nft = {} as Nft
            const coreNfts = await contract!.getNftItem(tokenId);

            const item = coreNfts;
            const tokenURI = await contract!.tokenURI(tokenId);
            const metaRes = await fetch(tokenURI);
            const meta = await metaRes.json();

            nft.price = parseFloat(ethers.utils.formatEther(item.price))
            nft.tokenId = item.tokenId.toNumber()
            nft.creator = item.creator
            nft.isListed = item.isListed
            nft.meta = meta

            return nft;
        }
    )
    const _contract = contract;

    const buyNft = useCallback(async (tokenId: number, value: number) => {
        try {
            const result = await _contract!.buyNft(
                tokenId, {
                value: ethers.utils.parseEther(value.toString())
            }
            )

            await toast.promise(
                result!.wait(), {
                pending: "Processing transaction",
                success: "Nft is yours! Go to Profile page",
                error: "Processing error"
            }
            );
        } catch (e: any) {
            console.error(e.message);
        }
    }, [_contract])

    const listNft = useCallback(async (tokenId: number, price: number) => {
        try {
            const result = await _contract!.placeNftOnSale(
                tokenId,
                ethers.utils.parseEther(price.toString()),
                {
                    value: ethers.utils.parseEther(0.025.toString())
                }
            )

            await toast.promise(
                result!.wait(), {
                pending: "Processing transaction",
                success: "Item has been listed",
                error: "Processing error"
            }
            );
        } catch (e: any) {
            console.error(e.message);
        }
    }, [_contract])
    return {
        ...swr,
        buyNft,
        listNft,
        data: data,
    };
}