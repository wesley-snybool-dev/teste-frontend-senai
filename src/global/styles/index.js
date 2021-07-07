import { createGlobalStyle } from 'styled-components'


 const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
            font-size: 62.6%;
        }

    body {
        background-color: #bacba9;
        font-family: Roboto, sans-serif;
    }
`

export default GlobalStyle;