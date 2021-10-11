import PropTypes from 'prop-types'

import { Box, Flex, Container, WrapperContainer } from '../../util/template'
import { Logo } from '../Logo'
import { Search } from '../Search'

import styles from './header.module.scss'

export const Header = ({
  theme,
  handleOnchange,
  handleRunSearch,
  handleViewHome,
  data 
}) => {
  return (
    <Container bg='red' className={styles.container} width={1}>
      <WrapperContainer
        className={styles.wrapperContainer}
        width={1}
        justifyContent='center'
      >
        <Flex
          className={styles.wrapperFlex}
          width={[1 / 12 * 10]}
          alignItems='center'
        >
          <Box width={[1 / 12 * 2.5, 1 / 12 * 1]} mr={['10px', '20px', '0px']}>
            <Logo theme={theme} handleViewHome={handleViewHome}/>
          </Box>

          <Box width={1 / 12 * 11}>
            <Search
              theme={theme}
              handleOnchange={handleOnchange}
              handleRunSearch={handleRunSearch}
              data={data}
            />
          </Box>
        </Flex>
      </WrapperContainer>
    </Container>
  )
}

Header.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  handleRunSearch: PropTypes.func.isRequired,
  handleViewHome: PropTypes.func.isRequired,
}
