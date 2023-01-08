import { createGlobalStyle } from 'styled-components'
import November_Night from '../fonts/November_Night.ttf'

const FontStyles = createGlobalStyle`

@font-face {
    font-family:'November' ;
    src: url(${November_Night}) format('truetype');
}`

export default FontStyles
