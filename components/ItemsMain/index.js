import PropTypes from 'prop-types'

import {
  Box,
  Flex,
  Container,
  WrapperContainer,
  Image,
  Head
} from '../../util/template'
import { ContentItems } from '../ContentItems'
import { DescribeRaute } from '../DescribeRaute'
import { Text } from '../Text'
import IconArrows from '../../assets/svg/icon-arrows.svg'

import styles from './itams-main.module.scss'

export const ItemsMain = ({
    theme,
    data,
    router, 
    handleViewItemsId,
    handleViewHome
  }) => {
  return (
    <Container width={1} mt='60px'>
      <Head>
        <title>
          { data?.valueInput } | Mercadolibre.com.co
        </title>
      </Head>

      <WrapperContainer justifyContent='center'>
        <Flex width={1 / 12 * 10} flexDirection='column'>
          <Box my='16px'>
            <DescribeRaute
              type='div'
              title={currentsRouter( theme, 'Items', router, handleViewHome)}
            />
          </Box>

          <Box>
            <ContentItems
              theme={theme}
              data={data}
              handleViewItemsId={handleViewItemsId}
            />
          </Box>
        </Flex>
      </WrapperContainer>
    </Container>
  )
}

export const currentsRouter = (
  theme,
  currentText,
  router,
  handleViewHome
  ) => {
  const { pathname } = router

  const renderText = (text) => {
    return (
      <Text
        type='span'
        fontFamily='RobotoMedium'
        title={text}
        fontSize='12px'
        color={theme.colors.colorText}
      />
    )
  }

  const render = pathname === '/'
    ? (
      <Box onClick={handleViewHome} className={styles.conainerLink}>
        {renderText('Home')}
      </Box>
      )
    : (
        <Flex alignItems='center'>
          <Box onClick={handleViewHome} className={styles.conainerLink}>
            {renderText('Home')}
          </Box>

          <Box mx='5px'>
            <Image src={IconArrows} alt='Icono arrows' width={8} height={8} />
          </Box>

          <Box>
            {renderText(currentText)}
          </Box>
        </Flex>
      )

    return render
}

ItemsMain.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  handleViewItemsId: PropTypes.func.isRequired,
  handleViewHome: PropTypes.func.isRequired,
}
