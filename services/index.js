import axios from 'axios'

export const getSearch = (query) => {
  return axios({
    method: 'get',
    url: `/api/items?search=${query}`
  })
}

export const getItemsId = (id) => {
  return axios({
    method: 'get',
    url: `/api/items/id/[id]`,
    params: { id }
  })
}

export const getItemsDescription = (id) => {
  return axios({
    method: 'get',
    url: `/api/items/description/[description]`,
    params: { id }
  })
}

