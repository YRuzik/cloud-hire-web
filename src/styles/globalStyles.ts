import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Argentum";
        src: url("../assets/fonts/ArgentumSans-Black.otf") format("opentype");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: "Argentum";
        src: url("../assets/fonts/ArgentumSans-Medium.otf") format("opentype");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "Argentum";
        src: url("../assets/fonts/ArgentumSans-Regular.otf") format("opentype");
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: "Argentum";
        src: url("../assets/fonts/ArgentumSans-Thin.otf") format("opentype");
        font-weight: 400;
        font-style: normal;
    }

    * {
        padding: 0;
        margin: 0;
        border: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a, a:link, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    aside, nav, footer, header, section, main {
        display: block;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }

    h1 {
        font-weight: bold;
    }

    ul, ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    img, svg {
        max-width: 100%;
        height: auto;
    }

    address {
        font-style: normal;
    }

    input, textarea, button, select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: transparent;
    }

    input::-ms-clear {
        display: none;
    }

    button, input[type="submit"] {
        display: inline-block;
        box-shadow: none;
        background: transparent none;
        cursor: pointer;
    }

    input:focus, input:active,
    button:focus, button:active {
        outline: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    label {
        cursor: pointer;
    }

    legend {
        display: block;
    }

    body {
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.textColor};
        font-family: "Argentum", sans-serif;
        font-weight: 500;
        font-size: 1rem;
        height: 100%;
    }

    h5 {
        font-size: 1rem;
        font-weight: 500;
    }

    h4 {
        font-size: 1.4rem;
        font-weight: 600;
    }

    h3 {
        font-size: 1.6rem;
        font-weight: 600;
    }

    h2 {
        font-size: 1.8rem;
        font-weight: 700;
    }

    h1 {
        font-size: 5rem;
        font-weight: 700;
    }
    
    p {
        font-weight: 600;
    }
`;