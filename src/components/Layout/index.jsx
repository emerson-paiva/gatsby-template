import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import SEO from 'components/SEO'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import * as S from './styles'

const Layout = ({ children }) => (
  <>
    <SEO lang="pt-br" />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.Wrapper>{children}</S.Wrapper>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
