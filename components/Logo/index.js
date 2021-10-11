import PropTypes from 'prop-types'

import { Flex, Image } from '../../util/template'
import logotipo from '../../assets/svg/logo-meli.svg'

import styles from './logo.module.scss'

export const Logo = ({ theme, handleViewHome }) => {
  return (
    <Flex bg='' onClick={handleViewHome} className={styles.containerImg}>
      <Image src={logotipo} alt='Logo Mercado Libre' width={57.8035} height={40} />
    </Flex>
  )
}

Logo.propTypes = {
  theme: PropTypes.object,
  handleViewHome: PropTypes.func.isRequired,
}

