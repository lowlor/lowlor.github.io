import React,{useState} from "react";
import Header from "./header";
import Banner from "./banner";
import PersonalInfo from "./personalInfo";
import PLanguageSection from "./pLanguageSection";
import SoftSkillSection from "./softSkillSection";
import LanguageSection from "./languageSection";
import PopUp from "./popUp";
import Progres from "./progress";
const initial = {
      status:0,
      section:'',
      info:''
}
  

const Main = () =>{
  const [isClick,setIsClick] = useState(initial);
  console.log(isClick);
  
  return (
  <>
    {isClick.status ? (<PopUp info={isClick} setState={setIsClick}/>) : (<></>)}
    <Header/>
    <Banner/>  
    <PersonalInfo/>
    <PLanguageSection setClick={setIsClick}/>
    <SoftSkillSection/>
    <LanguageSection/>
    <Progres setClick={setIsClick}/>
  </>
  )
};

export default Main;