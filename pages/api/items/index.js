const axios = require('axios')
import { urlSearch } from '../../../util/url'

export default function itemsHandler({ query: { search } }, res) {
  axios({
    method: 'get',
    url: `${urlSearch}${search}`,
  })
  .then((__res) => {
    res.status(200).json(__res.data)
  })
  .catch((error) => {
    res.status(
      error.response.data.status
      ? error.response.data.status 
      : 500
    ).json(error)
  })
}
