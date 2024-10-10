import { createGlobalStyle } from "styled-components";

interface Props {
    theme: {
        body: string;
    }
}

export const GlobalStyle = createGlobalStyle<Props>`
    body {
        background-color: ${props => props.theme.body};
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: #f97c22 ${props => props.theme.body};
    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: ${props => props.theme.backgroundColor};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #f97c22;
        border-radius: 10px;
        transition: background-color 0.3s ease;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #e68a1d;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: transform 0.1s ease, color 0.2s ease;
        font-family: 'Roboto', sans-serif;
    }
`;
