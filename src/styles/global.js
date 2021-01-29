import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --primary: #0b5e5d;
        --gray: #0b5e5d;

        --white: #FFFFFF;
        --black: #000000;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, select {
        font: 14px 'Work Sans', sans-serif;
        color: #474747;
    }

    a, a:hover  {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
