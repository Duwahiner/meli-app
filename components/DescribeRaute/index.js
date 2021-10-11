import PropTypes from 'prop-types'

import { Container } from '../../util/template'
import { Text } from '../Text'

import styles from './describe-raute.module.scss'

export const DescribeRaute = ({ theme, type, fontFamily, title, fontSize, color }) => {
  return (
    <Container className={styles.container} width={1}>
      <Text
        type={type}
        fontFamily={fontFamily}
        title={title}
        fontSize={fontSize}
        color={color}
      />
    </Container>
  )
}

DescribeRaute.propTypes = {
  theme: PropTypes.object,
  type: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType
  ]).isRequired,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string
}
