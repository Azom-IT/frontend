import { ReactNode, useMemo } from 'react';
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { useConfig } from './config-provider';
import { getChainParams } from '../chains/get-chain-params';
import { mapToWagmiChain } from '../chains/map-to-wagmi-chain';
import { BlockWalletConnector } from '../connectors/block-wallet-connector';
import { MetaMaskConnector } from '@wagmi/connectors/metaMask';
import { InjectedConnector } from '@wagmi/connectors/injected';

export function WagmiProvider({ children }: { children: ReactNode }) {
  const { chainName } = useConfig();
  const { provider, chains } = useMemo(() => {
    const chainParams = getChainParams(chainName);
    const chain = mapToWagmiChain(chainParams);

    return configureChains(
      [chain as Chain],
      [
        jsonRpcProvider({
          rpc: (chain: Chain) => {
            return {
              http: chain.rpcUrls.default.http[0],
              // webSocket: chain.rpcUrls.ws,
            };
          },
        }),
      ],
    );
  }, [chainName]);

  const connectors = useMemo(() => {
    return [
      // new InjectedConnector({
      //   chains,
      //   options: {
      //     name: 'Injected',
      //   },
      // }),
      new BlockWalletConnector({
        chains,
        options: {
          shimDisconnect: true,
        },
      }),
      new MetaMaskConnector({
        chains,
      }),
      // new WalletConnectConnector({
      //   chains,
      //   options: { projectId: '' },
      // }),
    ];
  }, [chains]);

  const client = useMemo(() => {
    return createClient({
      provider,
      connectors,
      autoConnect: true,
    });
  }, [connectors, provider]);

  return <WagmiConfig client={client}>{children}</WagmiConfig>;
}
