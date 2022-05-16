import React from "react";
import OpennedCard from "./OpennedCard";

function FlashCard({ question, answer, number, state, openned, ChangeState, ChangeOpen, UpdateCardStatus, statusCard, icone}){
    if(statusCard===true){
        if (icone==="close-circle") {
            return(
                <ContentCard h4class={"wrong-card"} number={number} icone={icone} />
     
            );
        }else if(icone==="help-circle") {
            return (
    
                <ContentCard h4class={"almost-right-card"} number={number} icone={icone} />

            );
        }else if(icone==="checkmark-circle"){
            return (
                <ContentCard h4class={"right-card"} number={number} icone={icone} />
            );
        }
    }
    return (
        < >

            { state === false ?
                (<ContentCard h4class={""} number={number} icone={icone} namefunction={()=>ChangeState(number-1)} />)
                
                :
                (<OpennedCard question={question} answer={answer} openned={openned} ChangeOpen={ChangeOpen} index={number-1} UpdateCardStatus={UpdateCardStatus}/>)
            }
         </>
     );
}

function ContentCard({h4class, number, icone, namefunction}){
    return (
        <div className="card" >

           <h4 className={h4class}>
                Pergunta {number}
            </h4>

            <ion-icon name={icone} onClick={namefunction}></ion-icon>         
        </div>
    );

}

export default function FlashCards({ questions, ChangeState, ChangeOpen, UpdateCardStatus }){

    return (
        <div className="flash-cards">
            {questions.map((question,index)=> <FlashCard ChangeState={ChangeState}key={index} number={index+1} question={question.question} answer={question.answer} state={question.state} openned={question.openned} ChangeOpen={ChangeOpen} UpdateCardStatus={UpdateCardStatus} statusCard={question.statusCard} icone={question.icone}/>)}
        </div>
    );
}


