import { FunctionComponent } from "react";
import { NftMeta } from "../../../types/nft";
import { NftItem } from "../../index";

type NftListProps = {
  ntfs: NftMeta[];
};

const NftList: FunctionComponent<NftListProps> = ({ nfts }) => {
  return (
    <>
      {nfts.map((nft) => (
        <NftItem key={nft.image} item={nft as NftMeta}></NftItem>
      ))}
    </>
  );
};

export default NftList;
