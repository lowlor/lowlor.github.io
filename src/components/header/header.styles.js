import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #aba1b9ff;
    color: #fff;
    padding: 0 20px;

    .h1{
        margin: 0;
        padding: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: var(--maxWidth);
    align-items: center;
    padding: 5px 0;
    margin: 0 auto;

    @media screen and (max-width:768px){
        p{
            font-size: 1.5rem;
        }
    }
`;

export const LogoImg = styled.img`
    width: 60px;

`;