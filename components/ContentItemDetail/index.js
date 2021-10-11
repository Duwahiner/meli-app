import PropTypes from 'prop-types'
import { Box, Flex, Container, WrapperContainer } from '../../util/template'
import { ItemDetail } from '../ItemDetail'

import styles from './content-items.module.scss'

export const ContentItemDetail = ({ theme, data, handleShowAlert }) => {
  return (
    <Container className={styles.container} width={1}>
      <WrapperContainer flexDirection='column'>
        <Flex width={1}>
          <Box
            width={1}
          >
            <ItemDetail theme={theme} data={data} handleShowAlert={handleShowAlert} />
          </Box>
        </Flex>
      </WrapperContainer>
    </Container>
  )
}

ContentItemDetail.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleShowAlert: PropTypes.func.isRequired,
}

