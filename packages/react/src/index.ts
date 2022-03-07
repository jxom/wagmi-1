export {
  Provider,
  Provider as WagmiProvider,
  useContext,
  Context,
} from './context'
export type {
  Props as ProviderProps,
  Props as WagmiProviderProps,
} from './context'

export {
  Connector,
  InjectedConnector,
  chain,
  allChains,
  defaultChains,
  defaultL2Chains,
  developmentChains,
  erc1155ABI,
  erc20ABI,
  erc721ABI,
  normalizeChainId,
  AddChainError,
  ChainNotConfiguredError,
  ConnectorAlreadyConnectedError,
  ConnectorNotFoundError,
  SwitchChainError,
  UserRejectedRequestError,
} from '@wagmi/core'

export type { Chain, ConnectorData } from '@wagmi/core'
