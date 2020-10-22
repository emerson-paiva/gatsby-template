import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    /* mobile viewport bug fix */
    height: -webkit-fill-available;
    min-height: -webkit-fill-available;
  }

  button {
    appearance: none;
    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
