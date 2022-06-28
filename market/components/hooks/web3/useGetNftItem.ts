import { CryptoHookFactory } from "@_types/hooks";
import { Nft } from "@_types/nft";
import { ethers } from "ethers";
import useSWR from "swr";

type GetNftsItemResponse = {}
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
    return {
        ...swr,
        data: data,
    };
}