import React from "react";

import { Wrapper, Content, LogoImg } from "./header.styles";
import logo from '../../img/logo.png';
const Header = () =>(
    <Wrapper>
        <Content>
            <LogoImg src={logo}/>
            <p>My port</p>
        </Content>
    </Wrapper>
);

export default Header;