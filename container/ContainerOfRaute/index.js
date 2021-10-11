import { useEffect, useContext, useState, useCallback } from 'react'
import {  useRouter } from 'next/router'

import { ContextView } from '../../contexts'
import { useTheme } from '../../hooks/useTheme'
import { Box } from '../../util/template'
import Layout from '../../components/Layout'
import Main from '../../components/Main'
import { HomeMain } from '../../components/HomeMain'
import { ItemsMain } from '../../components/ItemsMain'
import { ItemDatailMain } from '../../components/ItemDatailMain'
import { Alerts } from '../../components/Alerts'
import { Spinner } from '../../components/Spinner'
import { AlertsError } from '../../components/AlertsError'

import { getItemsDescription, getItemsId, getSearch } from '../../services'

import {
  getActionSearchButton,
  getDataItemIdResults,
  getDataResults,
  getErrorRequest,
  getRenderComponents,
  getSearchValue,
  getShowAlert,
  getShowSpinner,
} from '../../reducers'

const ContainerOfRoute = (props) => {
  const [state, dispatch] = useContext(ContextView)
  const theme = useTheme()
  const router = useRouter()

  const handleOnchange = (event) => {
    const value = event.target.value

    dispatch(getSearchValue(value))
    dispatch(getActionSearchButton(false))
  }

  const handleRunSearch = (event) => {
    event.preventDefault()
  
    if (state.valueInput !== '') {
      dispatch(getShowSpinner(true))
      dispatch(getActionSearchButton(true))
  
      getSearch(state.valueInput)
        .then((res) => {
          router.push('/items', `/items?search=${state.valueInput}`)

          dispatch(getDataResults(res?.data?.results.slice(0, 4)))
          dispatch(getRenderComponents(ItemsMain))
        })
        .catch((err) => {
          dispatch(getErrorRequest(true))
        })
        .finally(() => {
          dispatch(getShowSpinner(false))
        })
    }
  }

  const actionViewItems = (id, resId, resDescrip, components) => {
    router.push('/items', `/items/${id}`)

    dispatch(getDataItemIdResults({
      resultItemsId: resId.data,
      resultItemsIdDescription: resDescrip.data
    }))

    dispatch(getRenderComponents(components))
  }

  const handleViewItemsId = (id) => {
    if (state.valueInput !== '') {
      dispatch(getShowSpinner(true))
      dispatch(getActionSearchButton(true))
  
      getItemsId(id)
        .then((resId) => {
          
          getItemsDescription(id)
            .then((resDescrip) => {
              actionViewItems(id, resId, resDescrip, ItemDatailMain)
            })
            .catch((err) => {
              if(err.response.status >= 400 && err.response.status < 500) {
                actionViewItems(id, resId, { data: {} }, ItemDatailMain)
              } else {
                dispatch(getErrorRequest(true))
              }
            })
            .finally(() => {
              dispatch(getShowSpinner(false))
            })
    
        })
        .catch((err) => {
          dispatch(getErrorRequest(true))
        })
    }
  }

  const handleShowAlert = (show) => {
    dispatch(getShowAlert(show))
  }

  const handleErrorRequest = (show) => {
    dispatch(getErrorRequest(show))
  }

  const handleViewHome = useCallback(() => {
    router.push('/')

    dispatch(getRenderComponents(HomeMain))
    dispatch(getSearchValue(''))
  }, [dispatch])

 useEffect(() => {
  if (!state.actionSearchButton) {
    handleViewHome()
  }
 }, [handleViewHome])

  return (
    <Box width={1}>
      {state.showAlert && (
        <Alerts
          theme={theme}
          handleClose={() => handleShowAlert(false)}
        />
      )}

      {state.errorRequets && (
        <AlertsError
          theme={theme}
          handleClose={() => handleErrorRequest(false)}
        />
      )}

      {state.showSpinner && (
        <Spinner theme={theme} />
      )}
  
      <Layout
        data={state}
        theme={theme}
        handleOnchange={handleOnchange}
        handleRunSearch={handleRunSearch}
        handleViewHome={handleViewHome}
      >
        <Main
          theme={theme}
          currentComponent={() =>
            <state.RenderComponent
              theme={theme}
              data={state}
              handleViewItemsId={handleViewItemsId}
              handleShowAlert={handleShowAlert}
              router={router}
              handleViewHome={handleViewHome}
            />
          }
        />
      </Layout>
    </Box>
  )
}

export default ContainerOfRoute
