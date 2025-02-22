import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    padding: 100px 20px;
    background: rgb(209,185,194);
    background: linear-gradient(rgba(209,185,194,1) 27%, rgba(0,0,0,1) 100%);
    h1{
        text-align: center;
        padding-bottom: 30px;
        font-size: 2rem;
    }

    #content{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        gap: 200px;

    }
    .left{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;

        @media screen and (max-width : 768px) {
            display: none;
        }
    }

    .left-box,.left-box-first,.left-box-last{
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100px;
    }
    .left-box{
        justify-content: center;
    }

    .left-box-first{
        justify-content: end;
    }

    .left-box-last{
        justify-content: start;
    }

    .left-box-blank{
        height: 50px;
    }

    .progress-line{
        background-color: white;
        height: 50px;
        width: 5px;
    }

    .progress-mark{
        background-color: #9A8493ff;
        border: 1px solid #fff;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .progress-line-mark{
        background-color: white;
        height: 40px;
        width: 5px;
    }
    .right-box{
        box-shadow: 2px 0 0 white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        background-color: aliceblue;
        height: 100px;
        padding: 0 20px;
        border-radius: 20px;
        
        transition: .5s;
    }

    .right-box:hover{
        opacity: 0.5;
    }

    .right-box-blank{
        height: 50px;
    }

    h2{
        font-size: 1.1rem;
    }

    h3{
        font-size: 0.9rem;
    }

    p{
        color: black;
        font-size: 0.5rem;
    }

    @media screen and (max-width: 768px){
        .right{
            padding: 10px 80px;
        }
        padding: 50px 0;

        .project-detail{
            display: none;
        }
        
        h1{
            font-size: 1.7rem;
        }
    }
`;