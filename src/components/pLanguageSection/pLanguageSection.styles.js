import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #f2cfbdff;
    width: 100%;
    padding: 100px 120px;

    @media screen and (max-width: 768px) {
        padding: 50px 80px;
    }

`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;   

    h3{
        padding: 10px 0;
    }
    .boxs{
        padding: 0 20px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 2rem;
    }

    .box{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        padding: 10px 0;
        text-align: center;
        background-color: aliceblue;
        border-radius: 20px;
        transition: .5s;

        &:hover{
            opacity: 0.5;
        }
    }

    .boxImg{
        width: 100px;
        padding: 10px 0;
        @media screen and (max-width : 768px) {
            width:70px;
        }
    }

    @media screen and (max-width: 768px) {
        h2{
            font-size: 1.5rem;
        }

        h3{
            font-size: 1.2rem;
        }

        h4{
            font-size: 1.4rem;
        }
        .box{
            flex-direction: row;
            gap: 20px;
        }
    }
`;
