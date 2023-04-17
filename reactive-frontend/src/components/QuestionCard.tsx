import * as React from "react"
import { useState } from "react";
import { Question } from "../types/types";

function checkAnswers(props: Question, selected: number[]):boolean {
    return selected.sort().join(',')=== props.correctAnswers.sort().join(',');
}


function QuestionCard(props:Question) {
    const [selected, setSelected] = useState<number[]>([]);
    const [finished, setFinished] = useState<boolean>(false);

    function setSelectedBetter(id: number, checked: boolean){
        if(checked){
            setSelected([...selected, id]);
        } else{
            setSelected(selected.filter(e => e !== id));
        }
    }
    return (
      <div className="quizcontainer">
        <h3>{props.question}</h3>
        <div className="answercontainer">
                <label>
                    <input type="checkbox" value={props.answers[0].id} disabled={finished} checked={selected.includes(props.answers[0].id)} onChange={(event) => setSelectedBetter(props.answers[0].id, event.target.checked)}></input>
                    {props.answers[0].text}
                </label>
                <label>
                    <input type="checkbox" value={props.answers[1].id} disabled={finished} checked={selected.includes(props.answers[1].id)} onChange={(event) => setSelectedBetter(props.answers[1].id, event.target.checked)}></input>
                    {props.answers[1].text}
                </label>
                <label>
                    <input type="checkbox" value={props.answers[2].id} disabled={finished} checked={selected.includes(props.answers[2].id)} onChange={(event) => setSelectedBetter(props.answers[2].id, event.target.checked)}></input>
                    {props.answers[2].text}
                </label>
                <label>
                    <input type="checkbox" value={props.answers[3].id} disabled={finished} checked={selected.includes(props.answers[3].id)} onChange={(event) => setSelectedBetter(props.answers[3].id, event.target.checked)}></input>
                    {props.answers[3].text}
                </label>
        </div>
        <button type="submit" onClick={() => setFinished(true)}>Einreichen</button>
        {finished && 
            <div>
                <div>{checkAnswers(props, selected) ? "Richtig" :"Leider Falsch"}</div>
                <div>Erklärung: {props.explanation}</div>
                <button type="submit" onClick={() => {
                        props.nextIndex && props.nextIndex(props.id + 1);
                        props.setEndAnswers && props.setEndAnswers(props.endAnswer ? [...props.endAnswer, checkAnswers(props, selected)] : [checkAnswers(props, selected)])
                    }}>
                    Weiter
                </button>
            </div>
        }
      </div>
      
    );
  }
  
export default QuestionCard; 
  