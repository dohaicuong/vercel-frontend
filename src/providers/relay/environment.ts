import 'regenerator-runtime/runtime'

import { authMiddleware, RelayNetworkLayer, uploadMiddleware, urlMiddleware } from 'react-relay-network-modern'
import { Environment, RecordSource, Store } from 'relay-runtime'

// VITE_SUBSCRIPTION_ENDPOINT,
const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: () => import.meta.env.VITE_API_ENDPOINT
    }),
    authMiddleware({
      token: localStorage.getItem('jwt') || undefined
    }),
    uploadMiddleware(),
  ],
  { noThrow: true }
)

const store = new Store(new RecordSource())

export default new Environment({ network, store })
