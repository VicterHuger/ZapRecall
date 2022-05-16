import arrow from "../Assets/Images/setinha.png"

export default function OpennedCard({ question, answer, openned, ChangeOpen, index, UpdateCardStatus }){
    return(
        <>
            {openned===false 
                
                ?
            
                (<Card>
                    
                    <h3>{question}</h3>
                    
                    <img src={arrow} alt="Ilustração de uma seta curva, transmitindo a mensagem que o card que ela se encontra vira" onClick={()=>ChangeOpen(index)}></img>                          
                </Card>)
            
                :

                (<Card>
                    <h3>{answer}</h3>
                    
                    <div className="buttons">    
                        <button className="wrong-answer" onClick={() => UpdateCardStatus(index,"close-circle")}>Não lembrei</button>
                        <button className="almost-right" onClick={() => UpdateCardStatus(index,"help-circle")}>Quase não lembrei</button>
                        <button className="right-answer" onClick={() => UpdateCardStatus(index,"checkmark-circle")} >Zap!</button>
                    </div>
                    
                </Card>)
            }
        </>
        
    );
}

function Card({children}){
    return(
        <div  className="openned-card" > 
            {children}
        </div>
    )
}