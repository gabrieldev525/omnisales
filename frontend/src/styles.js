import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body, html, #root {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`