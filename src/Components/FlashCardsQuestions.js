// import { Link } from "react-router-dom";
import React from 'react';
import logo from "../Assets/Images/logo.png"
import FlashCards from './FlashCards';
import Footer from './Footer';



export default function FlashCardsQuestions({zapGoals, choice}){
    
    const TOTAL_ANSWERS=8;
    let questionsInitial=[];

    if(choice==="React"){
         questionsInitial=[
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
    }else if(choice==="Sport"){
        questionsInitial=[
            {question:"No vôlei de quadra, quantos jogadores jogam simultâneamente durante uma partida?",
             answer: "12",
             state:false,
             openned:false,
             statusCard: false,
             icone: "play-outline"},
             {question:"No vôlei de praia, quantos jogadores jogam simultâneamente durante uma partida?",
             answer:"4",
             state:false,
             openned:false,
             statusCard: false,
             icone: "play-outline"},
            {question: "Um jogador de fundo, no vôlei de quadra, ____ pode pular entre a linha dos 3 e a rede.",
            answer: "não",
            state:false, 
            openned:false,
            statusCard: false,
            icone: "play-outline"},
            {question:" Qual melhor time de futebol masculino do Rio de Janeiro?",
            answer: "Fluminense",
            state:false, 
            openned:false,
            statusCard: false,
            icone: "play-outline"},
            {question:"No basquete, quantos jogadores jogam simultâneamente durante uma partida?",
            answer:"10",
            state:false, 
            openned:false,
            statusCard: false,
            icone: "play-outline"},
            {question:"No tênis, quanto(s) saque(s) um adiverśario pode errar antes que seja considerado ponto para o adversário?",
            answer:"1",
            state:false, 
            openned:false,
            statusCard: false,
            icone: "play-outline"},
            {question:"Quais são os nados utilizados nas competições olímpicas de natação?",
            answer:"Crau, costa, peito e borboleta",
            state:false, 
            openned:false,
            statusCard: false,
            icone: "play-outline"},
            {question:"Qual a pontuação mínima que um jogador de tênis de mesa precisa para ganhar um set nas regras oficiais?",
            answer:"11 pontos",
            state:false, 
            openned:false,
            statusCard: false,
            icone: "play-outline"}
        ]
    }
    

    let questionsInitialSorted=questionsInitial.sort(()=>Math.random()-0.5);

    const [answered,setAnswered]=React.useState(0);
    const [questions,setQuestions]=React.useState(questionsInitialSorted);
    const [icons,setIcons]=React.useState([]);
    const [iscompleted,SetIscompleted]=React.useState("initial");
    const [buttonAplied,SetButtonAplied]=React.useState("false");

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
        setQuestions(newQuestions);
        UpdateFooter(string);
    }

    function UpdateFooter(icone){
        setAnswered(answered+1);
        setIcons([...icons,icone]);

        if(answered===TOTAL_ANSWERS-1){
            SetButtonAplied(true);
            console.log(zapGoals);
            if(icons.filter(icon=>icon==="checkmark-circle").length>=(zapGoals)){
                SetIscompleted(true);
            }else{
                SetIscompleted(false);
            } 
        }
    }

    // function RebootPage(){
    //     setAnswered(0);
    //     questionsInitialSorted=questionsInitial.sort(()=>Math.random()-0.5);
    //     setQuestions(questionsInitialSorted);
    //     setIcons([]);
    //     SetIscompleted("initial");
    //     SetButtonAplied("false");
    // }
    
    if(iscompleted===true){
        return (
            <div className="flash-cards-page">
                
                    <img src={logo} alt="Logo do Zap Recall - Ilustração de um relâmpago"/>
                    <h1>ZapRecall</h1>
                <div className="header">
                </div>
                
                <FlashCards questions={questions} ChangeState={ChangeState} ChangeOpen={ChangeOpen} UpdateCardStatus={UpdateCardStatus}/>
    
                <Footer answered={answered} buttonAplied={buttonAplied} zapGoals={zapGoals} icons={icons.map((icon,index)=>(<ion-icon key={index} name={icon} ></ion-icon>))}>
                        <h3 className='final-heading'>🥳 Parabéns!</h3>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                </Footer>
                        
            </div>
        );
    }else if(iscompleted===false){
        return (
            <div className="flash-cards-page">
                
                <div className="header">
                    <img src={logo} alt="Logo do Zap Recall - Ilustração de um relâmpago"/>
                    <h1>ZapRecall</h1>
                </div>
                
                <FlashCards questions={questions} ChangeState={ChangeState} ChangeOpen={ChangeOpen} UpdateCardStatus={UpdateCardStatus}/>
    
                <Footer answered={answered} buttonAplied={buttonAplied} zapGoals={zapGoals} icons={icons.map((icon,index)=>(<ion-icon key={index} name={icon} ></ion-icon>))}>
                    <h3 className='final-heading'>😢 Putz...</h3>
                    <p>Ainda faltam alguns...Mas não desanime!</p>
                </Footer>
                        
                
            </div>);
    }else{
        return (
            <div className="flash-cards-page">
                
                <div className="header">
                    <img src={logo} alt="Logo do Zap Recall - Ilustração de um relâmpago"/>
                    <h1>ZapRecall</h1>
                </div>
                
                <FlashCards questions={questions} ChangeState={ChangeState} ChangeOpen={ChangeOpen} UpdateCardStatus={UpdateCardStatus}/>
    
                <Footer answered={answered} buttonAplied={buttonAplied} zapGoals={zapGoals} icons={icons.map((icon,index)=>(<ion-icon key={index} name={icon}  ></ion-icon>))}/>
            
            </div>)
    }

}