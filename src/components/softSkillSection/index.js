import React from "react";
import { Wrapper,Content } from "./softSkillSection.styles";


const SoftSkillSection = () =>{
    
    const info = ['Quick Learning', 'Communication', 'Collaboration'];

    return (
        <Wrapper>
            <Content>
                <h2>Soft Skill</h2>
                <div class='boxs'>
                    {info.map(info=>(
                        <>
                            <div class='box'>
                                <h3 key={info}>{info}</h3>
                            </div>
                        </>    
                    ))}
                </div>
            </Content>
        </Wrapper>
    )
}



export default SoftSkillSection;