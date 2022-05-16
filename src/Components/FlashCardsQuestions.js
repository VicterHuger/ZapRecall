// import { Link } from "react-router-dom";
import React from 'react';
import logo from "../Assets/Images/logo.png"
import FlashCards from './FlashCards';
import Footer from './Footer';

// function AddQuestion(question){
//     return 
// }




export default function FlashCardsQuestions(){

    let questionsInitial=[
        {question:"O que é JSX?",
         answer: "Uma extensão de linguagem do JavaScript",
         state:false,
         openned:false,
         statusCard: false,
         icone: "play-outline"},
         {question:"O React é __ ",
         answer:"uma biblioteca JavaScript para construção de interfaces",
         state:false,
         openned:false,
         statusCard: false,
         icone: "play-outline"},
        {question: "Componentes devem iniciar com __",
        answer: "letra maiúscula",
        state:false, 
        openned:false,
        statusCard: false,
        icone: "play-outline"},
        {question:" Podemos colocar __ dentro do JSX",
        answer: "expressões",
        state:false, 
        openned:false,
        statusCard: false,
        icone: "play-outline"},
        {question:"O ReactDOM nos ajuda __",
        answer:"interagindo com a DOM para colocar componentes React na mesma",
        state:false, 
        openned:false,
        statusCard: false,
        icone: "play-outline"},
        {question:"Usamos o npm para __",
        answer:"gerenciar os pacotes necessários e suas dependências",
        state:false, 
        openned:false,
        statusCard: false,
        icone: "play-outline"},
        {question:"Usamos props para __",
        answer:"passar diferentes informações para componentes ",
        state:false, 
        openned:false,
        statusCard: false,
        icone: "play-outline"},
        {question:"Usamos estado (state) para __",
        answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        state:false, 
        openned:false,
        statusCard: false,
        icone: "play-outline"}
    ];
    questionsInitial=questionsInitial.sort(()=>Math.random()-0.5);

    const [answered,setAnswered]=React.useState(0);
    const [questions,setQuestions]=React.useState(questionsInitial);

    function ChangeState(index){
        const newQuestions=[...questions];
        newQuestions[index].state=true;
        setQuestions(newQuestions);
    }

    function ChangeOpen(index){
        const newQuestions=[...questions];
        newQuestions[index].openned=true;
        setQuestions(newQuestions);
    }

    function UpdateCardStatus(index,string){
        const newQuestions=[...questions];
        newQuestions[index].statusCard=true;
        newQuestions[index].icone=string;
        console.log(newQuestions[index]);
        setQuestions(newQuestions);
    }

    return (
        <div className="flash-cards-page">
            
            <div className="header">
                <img src={logo} alt="Logo do Zap Recall - Ilustração de um relâmpago"/>
                <h1>ZapRecall</h1>
            </div>
            
            <FlashCards questions={questions} ChangeState={ChangeState} ChangeOpen={ChangeOpen} UpdateCardStatus={UpdateCardStatus}/>

            <Footer answered={answered} />
            
        </div>
    )

}