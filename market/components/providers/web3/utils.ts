import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";
import { ethers } from "node_modules/ethers/lib/index";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export type Web3Params = {
  ethereum: MetaMaskInpageProvider | null;
  provider: providers.Web3Provider | null;
  contract: Contract | null;
};

export type Web3State = {
  isLoading: boolean;
} & Web3Params;

export const createDefaultState = () => {
  return {
    ethereum: null,
    provider: null,
    contract: null,
    isLoading: true,
  };
};

const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID;

export const loadContract = async (
  name: string,
  provider: providers.Web3Provider
): Promise<Contract> => {
  if (!NETWORK_ID) {
    
    return Promise.reject("NEtwork ID is not defined!");
  }
  //doc trong thu muc contracts de lay thong tin contract duoc deploy
  const res = await fetch(`/contracts/${name}.json`); //return ve response
  const Artifact = await res.json(); //json() la phuong thuc bat dong bo, return ve` promise

  if(Artifact.networks[NETWORK_ID].address) {
      const contract = new ethers.Contract(
        Artifact.networks[NETWORK_ID].address,
        Artifact.abi,
        provider
      )

      return contract;
  } else {
      return Promise.reject(`Contract: [${name}] cannot be loaded`)
  }
};
