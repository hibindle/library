import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
   font-family: 'IBM Plex Sans', sans-serif!important;
   background: black!important;
  }
`

export default GlobalStyle
