import React from "react";
import { Wrapper,Content } from "./personalInfo.styles";
import profile from "../../img/images.jpg"
const PersonalInfo = ()=>(
    <Wrapper>
        <Content>
            <div id="imgSection">
                <img src={profile} alt="profile"/>
            </div>
            <div id="textSection">
                <h3>Helo, My name is Sithiphon Kiattipongpaisaen</h3>
                <p>Currently learning at Kasetsart University</p>
            </div>
        </Content>
    </Wrapper>
);

export default PersonalInfo;