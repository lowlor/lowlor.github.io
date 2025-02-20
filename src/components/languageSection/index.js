import React from "react";
import { Wrapper,Content } from "./languageSection.styles";

const LanguageSection = ()=>{
    const languages = [{
        name: 'Thai',
        info: 'Native language',
        proof: ''   
    },{
        name: 'English',
        info: 'Secondary Language',
        proof: 'Toeic 851 score'
    },{
        name: 'Japanese',
        info: 'Third Language',
        proof:'N3'
    }]


    return (
        <Wrapper>
            <Content>
                <h2>Language Skill</h2>
                <div class="boxs">
                    {languages.map(language=>(
                        <>
                            <div class="box">
                                <h4 key={language.name}>{language.name}</h4>
                                <h3>{language.info}</h3>
                                <h3>{language.proof}</h3>
                            </div>
                        </>
                    ))}
                </div>
            </Content>
        </Wrapper>

    );
};

export default LanguageSection;