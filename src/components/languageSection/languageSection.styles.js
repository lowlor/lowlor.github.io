import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: #F2CFBDff;
    padding: 100px 20px;

`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    .boxs{
        display: flex;
        flex-direction: row;
        justify-content: center;
        
    }

    .box{
        text-align: center;
        margin: 0 50px;
        background-color: aliceblue;
        border-radius: 50px;
        padding: 30px;
    }

    h4,h3{
        font-size: 1.1rem;
        padding: 0;
        margin:0;
    }

    @media screen and (max-width: 768px){
        
        .boxs{
            flex-direction: column;
            gap: 20px;
        }
    }
`;