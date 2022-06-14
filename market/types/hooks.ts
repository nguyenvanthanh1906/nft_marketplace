import { MetaMaskInpageProvider } from "@metamask/providers";
import { ProviderProps, Contract } from "ethers";
import SWRResponse from "swr";
export type Web3Dependencies = {
  provider: providers.Web3Provider;
  contract: Contract;
  ethereum: MetaMaskInpageProvider;
};
// debugger
// export type CryptoHookFactory<D = any, P = any> = {
//   (d: Partial<Web3Dependencies>): CryptoHandlerHook<D, P>;
// };
// debugger
// export type CryptoHandlerHook<D = any, P = any> = (
//   params: P
// ) => CryptoSWRResponse<D>;
// debugger
// export type CryptoSWRResponse<D = any> = SWRResponse<D>;
export type CryptoHookFactory<D = any, P = any> = {
  (d: Partial<Web3Dependencies>): (params: P) => SWRResponse<D>
}