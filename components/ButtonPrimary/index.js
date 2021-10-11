import PropTypes from 'prop-types'

import { Button } from '../../util/template'
import { Text } from '../Text'

import styles from './button-primary.module.scss'

export const ButtonPrimary = ({
  theme,
  color,
  title,
  fontFamily,
  type,
  fontSize,
  width,
  height,
  handleOnClick
}) => {
  return (
    <Button
      width={width}
      height={height}
      className={styles.buttonPrimary}
      onClick={handleOnClick}
    >
      <Text
        type={type}
        fontFamily={fontFamily}
        title={title}
        fontSize={fontSize}
        color={color}
      />
    </Button>
  )
}


ButtonPrimary.defaultProps = {
  type: 'span',
  fontFamily: 'Roboto',
  color: '#FFF',
  fontSize: '16px'
}

ButtonPrimary.propTypes = {
  theme: PropTypes.object,
  handleOnClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType
  ]).isRequired,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.string,
}
