import { createGlobalStyle } from 'styled-components'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        min-height: 100vh
    }

    body {
        background: ${({ theme }: {theme: Theme}) => theme.palette.background.default}
    }
    
    img {
        max-width: 100%;
        object-fit: cover;
    }
`
