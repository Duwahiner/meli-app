import { Global, css, ThemeProvider } from '@emotion/react'

import theme from '../theme'
import { Box, Container, WrapperContainer } from '../util/template'

import 'normalize.css'
import '../assets/styles/fonts.css'
import styles from '../assets/styles/_app.module.scss'
import { StoreProvider } from '../contexts/StoreProvider'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Box className='scroll'>
      <ThemeProvider theme={theme}>
        <Container width={1} justifyContent='center'>
          <WrapperContainer
            className={styles.wrapperContainer}
            width={1}
          >
           <StoreProvider>
            <Box width={1}>
              <Component {...pageProps} />
            </Box>
           </StoreProvider>
          </WrapperContainer>
        </Container>
      </ThemeProvider>

      <Global
        styles={
          css`
            body {
              background-color: ${theme.colors.bgColor}
            }
            
            body::-webkit-scrollbar {
              display: none;
              background: #F6F6F6;
              width: 5px
            }
            
            body::-webkit-scrollbar-thumb {
              background: #D6DBDF;
              border-radius: 0px;
            }

            body::-webkit-scrollbar-thumb:hover{
              background: #aabbf2;
              box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
            }
          `
        }
      />
    </Box>
  )
}

export default MyApp
