import { createGlobalStyle } from "styled-components";

interface Props {
    theme: {
        body: string;
    }
}

export const GlobalStyle = createGlobalStyle<Props>`
    body {
        background-color: ${props => props.theme.body};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: transform 0.1s ease, color 0.2s ease;
        font-family: 'Roboto', sans-serif;
    }
`