import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {
  Box,
  Flex,
  WrapperContainer as Container,
  Image
} from '../../util/template'
import { Text } from '../Text'
import { ImagesProducts } from '../ImagesProducts'
import { formatNumber } from '../../util'
import iconShipping from '../../assets/images/icon-shipping.png'

import styles from './items.module.scss'

const ContentPrice = styled(Box)`
`
const ContentTitle = styled(Box)`
`

export const Items = ({ theme, data, handleViewItemsId }) => {
  return (
    <Container width={1} flexDirection={['column', 'row']}>
      <Flex
        className={styles.contentImage}
        onClick={handleViewItemsId}
        alignItems='center'
        justifyContent='center'
        width={[1, '140px', '180px']}
        height={['140px', '140px', '180px']}
      >
        <ImagesProducts
          theme={theme}
          src={data.thumbnail}
          alt={data.title}
          width='100%'
          height= 'auto'
        />
      </Flex>

      <Flex
        flex='auto'
        justifyContent={[null, null, 'space-between']}
        flexDirection={['column', 'column', 'row']}
      >
        <Flex width={[1, 1, 1 / 12 * 7]} flexDirection='column'>
          <ContentPrice>
            <Flex
              mt={['0px', '0px', '16px']}
              mb={['20px', '20px', '32px']}
              alignItems='center'
              onClick={handleViewItemsId}
              style={{ cursor: 'pointer' }}
            >
              <Text
                type='h2'
                fontFamily='RobotoBold'
                title={`$ ${formatNumber(data.price)}`}
                fontSize='24px'
                color={theme.colors.title}
              />

              {
                data.shipping.free_shipping &&
                  <Box className={styles.contentIcon}>
                    <Image src={iconShipping} alt='shipping' width={20} height={20} />
                  </Box>
              }
            </Flex>
          </ContentPrice>

          <ContentPrice>
            <ContentTitle
              mb={['20px', '20px', '32px']}
              onClick={handleViewItemsId}
              style={{ cursor: 'pointer' }}
            >
              <Text
                type='h1'
                fontFamily='RobotoLight'
                title={data.title}
                fontSize='20px'
                color={theme.colors.title}
              />
            </ContentTitle>
          </ContentPrice>
        </Flex>

        <Flex width={[1, 1, 1 / 12 * 2]}>
          <Box  mt={['0px', '0px', '32px']}>
            <Text
              type='span'
              fontFamily='Roboto'
              title={data?.location
                ? data?.location?.city?.name
                : data?.seller_address?.city?.name
              }
              fontSize='12px'
              color={theme.colors.placeholder}
            />
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}

Items.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleViewItemsId: PropTypes.func.isRequired,
}
