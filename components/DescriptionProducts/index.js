import PropTypes from 'prop-types'

import { Box, WrapperContainer as Container } from '../../util/template'
import { Text } from '../Text'

export const DescriptionProducts = ({ theme, data }) => {
  return (
    <Container width={1} flexDirection='column'>
      <Box mb='32px'>
        <Text
          type='h3'
          fontFamily='Roboto'
          title='Descripción de producto'
          fontSize='28px'
          color={theme.colors.title}
        />
      </Box>

      <Box>
        <Text
          type='span'
          fontFamily='Roboto'
          title={data.data?.resultItemsIdDescription?.plain_text
            ? data.data.resultItemsIdDescription.plain_text
            : 'No se encontro descripción para el producto'
          }
          fontSize='16px'
          color={theme.colors.placeholder}
        />
      </Box>
    </Container>
  )
}

DescriptionProducts.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}
