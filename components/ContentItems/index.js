import PropTypes from 'prop-types'

import { Box, Flex, Container, WrapperContainer } from '../../util/template'
import { Items } from '../Items'
import { Text } from '../Text'


import styles from './content-items.module.scss'

export const ContentItems = ({ theme, data, handleViewItemsId }) => {
  return (
    <Container className={styles.container} width={1}>
      <WrapperContainer flexDirection='column'>
        {
          data?.data?.resultItems.length > 0
            ? (
              data?.data?.resultItems.map((item, index, arr) => {
                return (
                  <Flex width={1} key={index}>
                    <Box
                      width={1}
                      style={{
                        boxSizing: 'border-box',
                        borderBottom:
                          index + 1 < arr.length ? `solid 1px ${theme.colors.bgColor}` : '',
                        marginTop: (index + 1) !== 1 ? '16px' : '',
                        paddingBottom: index + 1 < arr.length ? '16px' : ''
                      }}
                    >
                      <Items
                        theme={theme}
                        handleViewItemsId={() => handleViewItemsId(item.id)}
                        data={item}
                      />
                    </Box>
                  </Flex>
                )
              })
              )
            : (
                <Flex width={1} justifyContent='center' alignItems='center'>
                  <Text
                    type='span'
                    fontFamily='RobotoBold'
                    title='Lo sentimos no hemos encontrado resultados'
                    fontSize='18px'
                    color={theme.colors.title}
                  />
                </Flex>
              )
          
        }
      </WrapperContainer>
    </Container>
  )
}

ContentItems.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleViewItemsId: PropTypes.func.isRequired,
}
