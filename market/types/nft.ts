import internal from "stream";

export type NftMeta = {
    name: string;
    description: string;
    image: string;
    likes: int;
}

export type NftCore = {
    tokenId: number;
    price: number;
    creator: string;
    isListed: boolean;
    owner: string
}

export type Nft = {
    meta: NftMeta
    transactions: any[]
    endAt: any
    startPrice: any
    highestPrice: any
    highestBidder: any
    bidOwner: any
} & NftCore

export type FileReq = {
    bytes: Uint8Array;
    contentType: string;
    fileName: string;
}

export type PinataRes = {
    IpfsHash: string;
    PinSize: number;
    Timestamp: string;
    isDuplicate: boolean;
}