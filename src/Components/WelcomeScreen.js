import { Link } from "react-router-dom"
import logo from "../Assets/Images/logo.png"

export default function WelcomeScreen(){
    return (
        <div className="first-screen">  
            <img src={logo} alt="Logo do Zap Recall - Ilustração de um relâmpago"/>
            <h1>ZapRecall</h1>
            <Link to="/questions">
                <button>
                    <h3>Iniciar Recall!</h3>
                </button>
            </Link>
        </div>

    ) 
}