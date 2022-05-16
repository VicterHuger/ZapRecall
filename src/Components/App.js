import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../Assets/CSS/reset.css"
import "../Assets/CSS/style.css"

import WelcomeScreen from "./WelcomeScreen";
import FlashCardsQuestions from "./FlashCardsQuestions";

export default function App(){
    
    const [zapGoals, SetZapGoals]=React.useState("");

    function GetInputValue(event){
        SetZapGoals(Number(event.target.value));
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomeScreen GetInputValue={GetInputValue} zapGoals={zapGoals}/>}/>
                <Route path="/questions" element={<FlashCardsQuestions zapGoals={zapGoals}/>} />
                
            </Routes>
        </BrowserRouter>
        
    )
}