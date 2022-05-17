import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../Assets/CSS/reset.css"
import "../Assets/CSS/style.css"

import ChooseDeck from "./ChooseDeck";
import WelcomeScreen from "./WelcomeScreen";
import FlashCardsQuestions from "./FlashCardsQuestions";

export default function App(){

    

    const [zapGoals, SetZapGoals]=React.useState("");
    const [choice,SetChoice]=React.useState("React")

    function GetInputValue(event){
        SetZapGoals(Number(event.target.value));
    }

    function GetSelectedChoice(event){
        SetChoice(event.target.value);
        console.log(choice);
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<ChooseDeck GetSelectedChoice={GetSelectedChoice} />} />
                <Route path="/zapGoals" element={<WelcomeScreen GetInputValue={GetInputValue} zapGoals={zapGoals}/>}/>
                <Route path="/questions" element={<FlashCardsQuestions zapGoals={zapGoals} choice={choice}/>} />
                
            </Routes>
        </BrowserRouter>
        
    )
}