import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(240, 248, 255, 0.5); 
    border: 2px solid black;
    z-index: 10;

`;

export const Content = styled.div`
    border-radius: 30px;
    display: flex;
    background-color: aliceblue;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 25%;
    width: 50%;
    border: 2px solid black;
    z-index: 10;
    padding: 10px;

`;


export const Text = styled.div`
    text-align: center;
    width: 100%;
    max-width: var(--maxWidth);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        color: black;
        font-size: 1.2rem;
    }
    h1{
        color: black;
    }

    .line{
        margin: 10px 0;
        height: 1px;
        width: 70%;
        background-color: #906F67ff;
    }

    button{
        margin-top: 10px;
        border: 0;
        background-color: #F2CFBDff;
        border-radius: 10px;
        padding: 5px;
    }

    #pName{
        font-weight: bold;
    }
    @media screen and (max-width: 768px) {
        h1{
            font-size: 1.5rem;
        }
        
        p{
            font-size: 0.7rem;
        }
    }
`;