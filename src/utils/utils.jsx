/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useAccount, useConfig, useSwitchChain } from "wagmi";
import { CHAIN_ID } from "./constant";

let initialState = {
  account: null,
  chainIdArray: [],
  chainId: 0,
};

export const AppContext = createContext(initialState);
export const ConectivityProvider = ({ children }) => {
  const { switchChain } = useSwitchChain();
  const { address, isDisconnected, chainId } = useAccount();
  const { chains } = useConfig();
  const chainIds = chains?.map((info) => info?.id);

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({
      account: address ?? null,
    });
  }, [isDisconnected, address]);

  useEffect(() => {
    if (address && chainId && chainId !== CHAIN_ID) {
      (() => {
        try {
          switchChain({ chainId: CHAIN_ID });
        } catch (e) {
          console.log(e);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, chainId]);
  return (
    <AppContext.Provider
      value={{
        account: state.account,
        chainIdArray: chainIds,
        chainId: chainId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
