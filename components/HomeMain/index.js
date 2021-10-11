import PropTypes from 'prop-types'

import { Container, WrapperContainer, Head } from '../../util/template'
import { Text } from '../Text'

export const HomeMain = ({ theme }) => {
  return (
    <Container width={1}>
      <Head>
        <title>
          Home | Mercadolibre.com.co
        </title>
      </Head>

      <WrapperContainer
        width={1}
        justifyContent='center'
        alignItems='center'
      >
        <Text
          type='span'
          fontFamily='Roboto'
          title='Home'
          fontSize='15px'
          color={theme.colors.placeholder}
        />
      </WrapperContainer>
    </Container>
  )
}

HomeMain.propTypes = {
  theme: PropTypes.object.isRequired,
}
