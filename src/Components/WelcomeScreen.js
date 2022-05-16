import React from "react"
import { Link } from "react-router-dom"
import logo from "../Assets/Images/logo.png"

export default function WelcomeScreen({GetInputValue, zapGoals}){
    
    if(zapGoals===""){
        return(
        <div className="first-screen">  
            <img src={logo} alt="Logo do Zap Recall - Ilustração de um relâmpago"/>
            <h1>ZapRecall</h1>
            <input type="text" onChange={GetInputValue} name="zap-goals" placeholder="Digite sua meta de zaps..."/>
            <button>
                <h3>Iniciar Recall!</h3>
            </button>
        </div>)
    }
    if(!Boolean(zapGoals) || zapGoals<1 || zapGoals>8 ) {
    return (
        <div className="first-screen">  
            <img src={logo} alt="Logo do Zap Recall - Ilustração de um relâmpago"/>
            <h1>ZapRecall</h1>
            <input  type="text" onChange={GetInputValue} name="zap-goals" placeholder="Digite sua meta de zaps..."/>
            <button>
                <h3>Iniciar Recall!</h3>
            </button>
            {alert("Dados incorretos, digite um número de 1 a 8")}
    </div>)
    }else{
        return (
        <div className="first-screen">  
            <img src={logo} alt="Logo do Zap Recall - Ilustração de um relâmpago"/>
            <h1>ZapRecall</h1>
            <input  type="text" onChange={GetInputValue} name="zap-goals" placeholder="Digite sua meta de zaps..."/>
            <Link to="/questions">
                <button>
                    <h3>Iniciar Recall!</h3>
                </button>
            </Link>
            
    </div>)
    }     
}

