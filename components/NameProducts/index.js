import PropTypes from 'prop-types'

import { Box, WrapperContainer as Container } from '../../util/template'
import { Text } from '../Text'
import { ButtonPrimary } from '../ButtonPrimary'

import { formatNumber } from '../../util'

export const NameProducts = ({ theme, data, handleShowAlert }) => {
  return (
    <Container width={1} flexDirection='column'>
      <Box mb='16px'>
      {
        data.data.resultItemsId.condition === 'new' && (
          <Text
            type='span'
            fontFamily='RobotoLight'
            title={data.data.resultItemsId?.sold_quantity > 1
              ? `Nuevo - ${data.data.resultItemsId?.sold_quantity} vendidos`
              : data.data.resultItemsId?.sold_quantity === 0 
                ? `Nuevo - ${data.data.resultItemsId?.available_quantity} disponible`
                : `Nuevo - ${data.data.resultItemsId?.sold_quantity} vendido`
            }
            fontSize='16px'
            color={theme.colors.placeholder}
          />
        )
      }

      {
        data.data.resultItemsId.condition === 'used' && (
          <Text
            type='span'
            fontFamily='RobotoLight'
            title={data.data.resultItemsId?.sold_quantity > 1
              ? `Usado - ${data.data.resultItemsId?.sold_quantity} vendidos`
              : data.data.resultItemsId?.sold_quantity === 0 
                ? `Usado - ${data.data.resultItemsId?.available_quantity} disponible`
                : `Usado - ${data.data.resultItemsId?.sold_quantity} vendido`
            }
            fontSize='14px'
            color={theme.colors.placeholder}
          />
        )
      }

      {
        (data.data.resultItemsId.condition !== 'new') &&
        (data.data.resultItemsId.condition !== 'used') && (
          <Text
            type='span'
            fontFamily='RobotoLight'
            title={data.data.resultItemsId?.sold_quantity > 1
              ? `Reacondicionado - ${data.data.resultItemsId?.sold_quantity} vendidos`
              : data.data.resultItemsId?.sold_quantity === 0 
                ? `Reacondicionado - ${data.data.resultItemsId?.available_quantity} disponible`
                : `Reacondicionado - ${data.data.resultItemsId?.sold_quantity} vendido`
            }
            fontSize='14px'
            color={theme.colors.placeholder}
          />
        )
      }
      
      </Box>

      <Box mb='32px'>
        <Text
          type='h1'
          fontFamily='RobotoBold'
          title={data.data.resultItemsId?.title}
          fontSize='24px'
          color={theme.colors.title}
        />
      </Box>

      <Box mb='32px'>
        <Text
          type='h2'
          fontFamily='Roboto'
          title={`$ ${formatNumber(data.data.resultItemsId?.price)}`}
          fontSize='46px'
          color={theme.colors.title}
        />
      </Box>

      <Box mb='32px'>
        <ButtonPrimary
          width={1}
          title='Comprar'
          fontFamily='Roboto'
          fontSize='18px'
          handleOnClick={() => handleShowAlert(true)}
        />
      </Box>
    </Container>
  )
}

NameProducts.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleShowAlert: PropTypes.func.isRequired,
}
