import PropTypes from 'prop-types'

import { Container, WrapperContainer } from '../../util/template'
import { Input } from '../Input'

import styles from './search.module.scss'

export const Search = ({
  theme,
  handleOnchange,
  handleRunSearch,
  data
}) => {
  return (
    <Container className={styles.container}>
      <WrapperContainer className={styles.wrapper}>
        <Input
          id=''
          type='text'
          disabled={false}
          placeholder='Nunca dejes de buscar'
          value={data.valueInput}
          handleOnchange={handleOnchange}
          handleRunSearch={handleRunSearch}
        />
      </WrapperContainer>
    </Container>
  )
}

Search.propTypes = {
  theme: PropTypes.object,
  data: PropTypes.object.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  handleRunSearch: PropTypes.func.isRequired,
}

