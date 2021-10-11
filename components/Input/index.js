import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { Box, WrapperContainer as Container, Image } from '../../util/template'
import iconSearch from '../../assets/svg/icon-search.svg'

import styles from './input.module.scss'

const FormControl = styled.form`
`

export const Input = ({
  type,
  id,
  value,
  disabled,
  placeholder,
  handleOnchange,
  handleRunSearch
}) => {
  return (
    <Container width={1} height='40px'>
      <FormControl className={styles.formControl}>
        <Box flex='auto' width={[1 / 12 * 8, 1]}>
          <input
            type={type}
            id={id}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            onChange={handleOnchange}
            className={styles.inputText}
            autoFocus
          />
        </Box>

        <Box>
          <button className={styles.buttonSearch} onClick={handleRunSearch}>
            <Box className={styles.containerImage}>
              <Image src={iconSearch} alt='Icono search' width={20} height={20} />
            </Box>
          </button>
        </Box>
      </FormControl>
    </Container>
  )
}

Input.defaultProps = {
  type: 'text',
  id: '',
  placeholder: 'Escribe algo que se te ocurra',
  disabled: false
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  handleRunSearch: PropTypes.func.isRequired,
}
