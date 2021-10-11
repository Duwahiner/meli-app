const axios = require('axios')
import {parse, stringify, toJSON, fromJSON} from 'flatted'

import { urlItemId } from '../../../../util/url'

export default function itemsIdDescriitionHandler({ query: { id } }, res) {
  axios({
    method: 'get',
    url: `${urlItemId}/${id}/description`,
  })
    .then((__res) => {
      res.status(200).json(__res.data)
    })
    .catch((error) => {
      const __error = Object.assign({}, error)

      res.status(
        error.response.data.status
        ? error.response.data.status 
        : 500
      ).json(error)
    })
}
