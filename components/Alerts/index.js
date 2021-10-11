import PropTypes from 'prop-types'

import { Box, Flex, Container, WrapperContainer } from '../../util/template'
import { ButtonPrimary } from '../ButtonPrimary'
import { Text } from '../Text'

import styles from './alerts.module.scss'

export const Alerts = ({
  theme,
  handleClose,
}) => {
  return (
    <Container className={styles.container}>
      <WrapperContainer className={styles.wrapperContainer}>
        <Flex width={1} flexDirection='column' alignItems='center'>
          <Box mb='16px'>
            <Text
              type='span'
              fontFamily='RobotoBold'
              title='Procesaremos tu solicitud'
              fontSize='22px'
              textAlign='center'
              color={theme.colors.title}
            />
          </Box>

          <Box mb='32px'>
            <Text
              type='span'
              fontFamily='Roboto'
              title='Todo listo.'
              fontSize='16px'
              color={theme.colors.colorText}
            />
          </Box>

          <Flex width={1} justifyContent='center'>
            <Box width={1 / 12 * 5}>
              <ButtonPrimary
                width={1}
                title='Cerrar'
                fontFamily='Roboto'
                fontSize='18px'
                handleOnClick={() => handleClose()}
              />
            </Box>
          </Flex>
        </Flex>
      </WrapperContainer>
    </Container>
  )
}

Alerts.propTypes = {
  theme: PropTypes.object.isRequired,
  AlertsError: PropTypes.func.isRequired,
}
