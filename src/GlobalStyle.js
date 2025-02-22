import { createGlobalStyle } from "styled-components"
import imageBg from "./img/imageBg.jpg";
export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --fontBig: 2.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    *{
        box-sizing: border-box;
    }

    body{
        margin: 0;
        padding: 0;
        background-image: url(${imageBg});
        h1{
            font-size: 2rem;
            font-weight: 600;
            color: white;
        }

        h2{
            font-size: 2rem;
            font-weight: 600;
        }
        h3{
            font-size: 1.5rem;
            font-weight: 600;
        }

        h4{
            font-size: 1.5rem;
            font-weight: 600;
        }
        p{
            font-size: 2rem;
            color: white;
        }

        h1,h2,h3,h4,p{
            margin: 0;
            padding: 0;
        }
    }

`;