import React, { ReactNode } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
    MuiThemeProvider, StylesProvider, createMuiTheme, Box, Grid, Container,
} from '@material-ui/core'

import { Normalize } from 'styled-normalize'

import { GlobalStyle } from './styles'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
})

type Props = {
    children: ReactNode
}

const BoxCustom = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

const Default = ({ children }: Props) => (
    <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Normalize />
                <GlobalStyle />
                <Container>
                    <BoxCustom>
                        <Grid container>
                            <Grid item xs={12}>{ children }</Grid>
                        </Grid>
                    </BoxCustom>
                </Container>
            </ThemeProvider>
        </MuiThemeProvider>
    </StylesProvider>
)

export default Default
