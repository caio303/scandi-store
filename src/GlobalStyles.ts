import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
    :root {
        --active-green: #5ECE7B;
        --hover-shadow: 0px 4px 35px 0px #A8ACB030;
        --text-black: #1D1F22;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    
    body, html {
        width: 100%;
        height: 100%;
        font-family: 'Raleway', sans-serif;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
        background-color: #fff;
        color: var(--text-black);
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; /* 15px */
        }

        @media (max-width: 720px) {
            font-size: 87.5%;  /* 14px */
        }
    }

    a {
        text-decoration: none;
        &:visited { color:inherit }
    }
`