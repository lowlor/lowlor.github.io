import styled from "styled-components";

export const Wrapper = styled.div`
    border: 5px solid #76666Eff;
    border-radius: 20px;
    background-color: #f2cfbdff;
    width: 100%;
    padding: 100px 150px;

    @media screen and (max-width:768px){
        padding: 10px;
    }
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 100px;
    h3,p{
       margin : 0 ;
       padding: 0;
    }

    #textSection{
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border: 2px solid #fff;
        border-radius: 20px;
    }

    #imgSection{
        margin: 0 auto;
    }

    .img{
        margin: 0 auto;
    }

    @media screen and (max-width: 768px){
        img{
            width: 100px;
        }
        p{
            font-size: 1.1rem;
        }
        h3{
            font-size: 1.5rem;
        }
        gap: 20px;
        padding: 20px;
    }

`;