import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    :root {
        --max-width: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }
    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }
    body {
        font-size: 2rem;
        font-weight: 600;
        margin: 0;

        color: var(--white);
    }
    h3 {
        font-size: 1.1rem;
        font-weight: 600;
    }
    p {
        font-size: 1rem;
    }
    
`