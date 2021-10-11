import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { Text } from '../Text'

const Container = styled.div`
`

export const Footer = ({ theme }) => {
  return (
    <Container>
      <div>
        <div>
          <Text
            type='span'
            fontFamily='RobotoLightItalic'
            title=''
            fontSize='12px'
            color='#202E5D'
          />
        </div>
      </div>
    </Container>
  )
}

Footer.propTypes = {
  theme: PropTypes.object,
}
