import * as React from 'react'
import {
  QueryClient as ReactQueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from 'react-query'
import { WagmiClient } from '@wagmi/core'

export const Context = React.createContext<null>(null)

export const reactQueryClient = new ReactQueryClient()

export type Props = {
  client: WagmiClient
}

export const Provider = ({
  children,
  client,
}: React.PropsWithChildren<Props>) => {
  React.useEffect(() => {
    ;(async () => {
      if (client.config.autoConnect) {
        await client.autoConnect()
      }
    })()

    return () => {
      client.destroy()
    }
  }, [client])

  return React.createElement(
    ReactQueryClientProvider,
    {
      client: reactQueryClient,
    },
    React.createElement(Context.Provider, { value: null }, children),
  )
}

export const useContext = () => {
  const context = React.useContext(Context)
  if (!context) throw Error('Must be used within Provider')
  return context
}
