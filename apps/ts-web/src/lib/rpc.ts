import { treaty } from '@elysiajs/eden'
import type { App } from 'api'

const client = treaty<App>('', {
  fetcher(url, options) {
    const apiPath = 'api/v1'
    const urlString = url.toString()
    const apiIndex = urlString.indexOf('/api/v1')
    const finalUrl =
      apiIndex !== -1 ? urlString.substring(apiIndex) : `/${apiPath}`
    return fetch(finalUrl, options)
  },
  fetch: {
    credentials: 'same-origin',
  },
})
const rpc = client.api.v1
export default rpc
