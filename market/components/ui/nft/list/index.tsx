import { FunctionComponent } from "react";
import { Nft } from "../../../types/nft";
import { NftItem } from "../../index";

type NftListProps = {
  ntfs: Nft[];
};

const NftList: FunctionComponent<NftListProps> = ({ nfts }) => {
  return (
    <>
      {nfts.map((nft) => (
        <NftItem key={nft.tokenId} item={nft}></NftItem>
      ))}
    </>
  );
};

export default NftList;
