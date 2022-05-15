import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../Assets/CSS/reset.css"
import "../Assets/CSS/style.css"

import WelcomeScreen from "./WelcomeScreen";
import FlashCardsQuestions from "./FlashCardsQuestions";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomeScreen/>}/>
                <Route path="/questions" element={<FlashCardsQuestions/>} />
                
            </Routes>
        </BrowserRouter>
        
    )
}