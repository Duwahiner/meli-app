import PropTypes from 'prop-types'

import { Box, Flex, Container, WrapperContainer, Head } from '../../util/template'
import { ContentItemDetail } from '../ContentItemDetail'
import { DescribeRaute } from '../DescribeRaute'
import { currentsRouter } from '../ItemsMain'

export const ItemDatailMain = ({ 
  theme,
  data,
  router,
  handleShowAlert,
  handleViewHome
}) => {
  return (
    <Container width={1} mt='60px'>
       <Head>
        <title>
          { data.data?.resultItemsId?.title } | Mercadolibre.com.co
        </title>
      </Head>

      <WrapperContainer justifyContent='center'>
        <Flex width={1 / 12 * 10} flexDirection='column'>
          <Box my='16px'>
            <DescribeRaute
              type='div'
              title={currentsRouter( theme, 'Items', router, handleViewHome)}
            />
          </Box>

          <Box>
            <ContentItemDetail
              theme={theme} data={data}
              handleShowAlert={handleShowAlert}
            />
          </Box>
        </Flex>
      </WrapperContainer>
    </Container>
  )
}

ItemDatailMain.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  handleShowAlert: PropTypes.func.isRequired,
  handleViewHome: PropTypes.func.isRequired,
}
