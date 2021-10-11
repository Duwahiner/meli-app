const axios = require('axios')
import { urlItemId } from '../../../../util/url'

export default function itemsIdHandler({ query: { id } }, res) {
  axios({
    method: 'get',
    url: `${urlItemId}/${id}`,
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
