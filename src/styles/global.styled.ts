import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Titillium Web;
        box-sizing: border-box;
    }

    body {
        background-color: #0F0F14;
    }

    p, h1, h2, h3, h4, h5, h6, div {
        color: #fff;
    }
`;
