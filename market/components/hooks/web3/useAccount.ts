import useSWR from "swr";
import { CryptoHookFactory } from "@_types/hooks";
import { useEffect } from "react";

type UseAccountResponse = {
    connect: () => void;
    isLoading: boolean;
    isInstalled: boolean;
}

type AccountHookFactory = CryptoHookFactory<string, UseAccountResponse>

export type UseAccountHook = ReturnType<AccountHookFactory>;
export const hookFactory: AccountHookFactory =
    ({ provider, ethereum, isLoading }) =>
        () => {
            const {data, mutate, isValidating, ...swr} = useSWR(provider ? "web3/useAccount" : null, async () => {
                const accounts = await provider!.listAccounts();
                const account = accounts[0]

                if (!account) {
                    throw "Cannot retreive account, connect to web3 wallet."
                }

                return account;
            }, {
                revalidateOnFocus: false
            });

            useEffect(() => {
                ethereum?.on("accountsChanged", handleAccountsChanged)
                return () => {
                    ethereum?.removeListener("accountsChanged", handleAccountsChanged)
                }
            })

            const handleAccountsChanged = (...args: unknown[]) => {console.log(typeof(args))
                const accounts = args[0] as string[]
                if (accounts.length === 0) {
                    console.error("please connect web3 wallet")
                } else if (accounts[0] !== data) {
                    mutate(accounts[0])
                }
            }

            const connect = async () => {
                try {
                    ethereum?.request({ method: "eth_requestAccounts" })
                } catch (e) {
                    console.log(e)
                }
            }

            return {
                ...swr,
                data,
                isValidating,
                isLoading: isLoading || isValidating,
                isInstalled: ethereum?.isMetaMask || false,
                mutate,
                connect
            }
        };

export const useAccount = hookFactory({ ethereum: null, provider: null });
