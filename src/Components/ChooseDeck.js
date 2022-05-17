import React from "react"
import { Link } from "react-router-dom"
import logo from "../Assets/Images/logo.png"

export default function ChooseDeck({GetSelectedChoice,choice}){

        return(
        <div className="first-screen">  
            
            <img src={logo} alt="Logo do Zap Recall - Ilustração de um relâmpago"/>

            <h1>ZapRecall</h1>
            <select defaultValue="default" onChange={GetSelectedChoice} > 
                    <option value="default" disabled hidden>
                     Escolha seu Deck
                    </option>
                    <option value="React" >React</option>
                    <option value="Sport" >Sport</option>
                </select>
            
            <Link to="/zapGoals">
                <button>
                    <h3>Iniciar Recall!</h3>
                </button>
            </Link>
        </div>)

    }
    