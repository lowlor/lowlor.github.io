import React from "react";
import { Wrapper, Content,Text } from "./popUp.styles";

const PopUp = ({info,setState}) =>{
    console.log(info.info.info);
    console.log(info.info.info[0]);
    
    return(<Wrapper>
        <Content>
            <Text>
                <h1>{info.info.name}</h1>
                {info.info.info.map((curr)=>(
                    <>
                        <p id='pName' key={curr.pName}>{curr.pName}</p>
                        <p>{curr.info}</p>
                        {curr.link ? (
                            <>
                                <a href={curr.link} target="_blank"><p>Click here to check my project</p></a>
                                <div class="line"></div>
                            </>
                        ): <></>}
                        
                    </>
                ))}
                {info.info.info[0] ? (<></>) : (<p>Sorry but I don't have project that using this</p>)}
                <button id="closeBtn" onClick={()=>setState({status:0})}>Close</button>
            </Text>
        </Content>
    </Wrapper>)
};

export default PopUp;