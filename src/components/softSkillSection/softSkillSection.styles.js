import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: #B9AFC5ff;
    padding: 100px 0;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    .boxs{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .box{
        text-align: center;
        background-color: aliceblue;
        padding: 10px;
        border-radius: 50px;
        margin: 0 60px;
    }

    @media screen and (max-width: 768px){
        
        .boxs{
            flex-direction: column;
            gap: 20px;
        }
    }
`;