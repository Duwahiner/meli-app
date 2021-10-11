import { HomeMain } from "../components/HomeMain"

const GET_RENDER_COMPONENTS = 'GET_HOME'
const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE'
const GET_SHOW_ALERT = 'GET_SHOW_ALERT'
const GET_SHOW_SPINNER = 'GET_SHOW_SPINNER'
const GET_ACTION_SEARCH_BUTTON = 'GET_ACTION_SEARCH_BUTTON'
const GET_ERROR_REQUEST = 'GET_ERROR_REQUEST'
const GET_DATA_RESULTS = 'GET_DATA_RESULTS'
const GET_DATA_ITEM_ID_RESULTS = 'GET_DATA_ITEM_ID_RESULTS'

export const getRenderComponents = (component = {}) => {
  return {
    type: GET_RENDER_COMPONENTS,
    payload: { component }
  }
}

export const getSearchValue = (text = '') => {
  return {
    type: GET_SEARCH_VALUE,
    payload: { text }
  }
}

export const getShowAlert = (action = false) => {
  return {
    type: GET_SHOW_ALERT,
    payload: { action }
  }
}

export const getShowSpinner = (action = false) => {
  return {
    type: GET_SHOW_SPINNER,
    payload: { action }
  }
}

export const getActionSearchButton = (action = false) => {
  return {
    type: GET_ACTION_SEARCH_BUTTON,
    payload: { action }
  }
}

export const getErrorRequest = (request = false) => {
  return {
    type: GET_ERROR_REQUEST,
    payload: { request }
  }
}

export const getDataResults = (data = []) => {
  return {
    type: GET_DATA_RESULTS,
    payload: { data }
  }
}

export const getDataItemIdResults = (data = {
  resultItemsId: {},
  resultItemsIdDescription: {}
}) => {
  return {
    type: GET_DATA_ITEM_ID_RESULTS,
    payload: { data }
  }
}




export const initialState = {
  RenderComponent: HomeMain,
  valueInput: '',
  showAlert: false,
  showSpinner: false,
  actionSearchButton: false,
  errorRequets: false,
  data: {
    resultItems: [],
    resultItemsId: {},
    resultItemsIdDescription: {}
   }
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_RENDER_COMPONENTS:
      return Object.assign({},
        state, { 
          RenderComponent:  payload.component
        })

    case GET_SEARCH_VALUE:
      return Object.assign({},
        state, { 
          valueInput:  payload.text 
        })

    case GET_SHOW_ALERT:
      return Object.assign({},
        state, {
          showAlert:  payload.action
        })

    case GET_SHOW_SPINNER:
      return Object.assign({},
        state, { 
          showSpinner:  payload.action
        })

    case GET_ERROR_REQUEST:
      return Object.assign({},
        state, {
          errorRequets:  payload.request
        })

    case GET_ACTION_SEARCH_BUTTON:
      return Object.assign({},
        state, {
          actionSearchButton:  payload.action
        })

    case GET_DATA_RESULTS:
      return Object.assign({},
        state, {
          data: { 
            ...state.data,
            resultItems: payload.data 
          } 
        })

    case GET_DATA_ITEM_ID_RESULTS:
      return Object.assign({},
        state, {
          data: { 
            ...state.data,
            resultItemsId: payload.data.resultItemsId,
            resultItemsIdDescription: payload.data.resultItemsIdDescription

          } 
        })

    default:
      return state
  }
}