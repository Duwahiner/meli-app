import PropTypes from 'prop-types'

import {
  Flex,
  WrapperContainer as Container,
} from '../../util/template'

import { NameProducts } from '../NameProducts'
import { DescriptionProducts } from '../DescriptionProducts'
import { ImagesProducts } from '../ImagesProducts'

import styles from './item-detail.module.scss'

export const ItemDetail = ({ theme, data, handleShowAlert }) => {
  return (
    <Container width={1} flexDirection='column'>

      <Flex
        width={1}
        justifyContent='space-between'
        flexDirection={['column', 'column', 'row']}
      >
        <Flex
          width={[1, 1, 1 / 12 * 7]}
          className={styles.contentImage}
          alignItems='center'
          justifyContent='center'
          width={['100%', '100%']}
          height={['auto']}
        >
          <ImagesProducts
            theme={theme}
            src={data.data.resultItemsId.pictures
              ? data.data.resultItemsId.pictures[0]?.url
              : data.data.resultItemsId.thumbnail
              }
            alt={data.data.resultItemsId.title}
            width='100%'
            height='auto'
            maxHeight='680px'
          />
        </Flex>

        <Flex width={[1, 1, 1 / 12 * 3]} mt={['20px', '0px']}>
          <NameProducts theme={theme} data={data} handleShowAlert={handleShowAlert} />
        </Flex>
      </Flex>

      <Flex mt={6} width={[1, 1, 1 / 12 * 7]}>
        <DescriptionProducts theme={theme}  data={data} />
      </Flex>
    </Container>
  )
}

ItemDetail.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleShowAlert: PropTypes.func.isRequired,
}
