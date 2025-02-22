import React,{useState} from "react";
import { Wrapper, Content } from "./pLanguageSection.styles";

//data
import { language, framework, database, library } from "../../Data/data";

const PLanguageSection = ({setClick}) =>{
    
    return (
    <Wrapper>
        <Content>
            <div>
                <h2>Programing Language, Database and Framework Skill</h2>

                <h3>Languages</h3>
                <div class="boxs">
                    {language.map(language =>(
                        <>
                            <div class="box" onClick={()=> setClick(
                                {
                                status:1,
                                info:language
                                }
                                )}>
                                <img class="boxImg" src={language.img} alt={`${language.name}-img`}/>
                                <h4 key={language.name}>{language.name}</h4>
                            </div>
                        </>
                    ))}
                </div>

                <h3>Framework</h3>
                <div class='boxs'>
                    {framework.map(framework =>(
                        <>
                            <div class="box" onClick={()=> setClick(
                                {
                                    status:1,
                                    info:framework
                                }
                            )}>
                                <img class="boxImg" src={framework.img} alt={`${framework.name}-img`}/>
                                <h4 key={framework.name}>{framework.name}</h4>
                            </div>
                        </>
                    ))}
                </div>

                <h3>Database</h3>
                <div class="boxs">
                    {database.map(database =>(
                        <>
                            <div class="box" onClick={
                                ()=>setClick(
                                    {
                                        status:1,
                                        info:database
                                    }
                                )
                            }>
                                <img class="boxImg" src={database.img} alt={`${database.name}-img`}/>
                                <h4 key={database.name}>{database.name}</h4>
                            </div>
                        </>
                    ))}
                </div>

                <h3>Library</h3>
                <div class='boxs'>
                    {library.map(library =>(
                        <>
                            <div class="box" onClick={()=> setClick(
                                {
                                    status:1,
                                    info:library
                                }
                            )}>
                                <img class="boxImg" src={library.img} alt={`${library.name}-img`}/>
                                <h4 key={library.name}>{library.name}</h4>
                            </div>
                        </>
                    ))}
                </div>
            </div>

        </Content>
    </Wrapper>

    ) 
};

export default PLanguageSection;