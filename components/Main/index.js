import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { Box } from '../../util/template'

const Container = styled(Box)`
`

const Main = ({ theme, currentComponent }) => {
  return (
    <Container pb='16px'>
      {currentComponent()}
    </Container>
  )
}

export default Main

Main.propTypes = {
  theme: PropTypes.object,
  currentComponent: PropTypes.func.isRequired,
}
