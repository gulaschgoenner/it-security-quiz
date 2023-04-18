import * as React from "react"
import { Question } from "../types/types.ts";
import QuestionCard from "./QuestionCard.tsx";
import ProgressBar from "./ProgressBar.tsx";
type Props = {
    questions: Question[];
}

function Quiz(props: Props) {
    const [index, setIndex] = React.useState<number>(0);
    const [endAnswers, setEndAnswers] = React.useState<boolean[]>([]);
const [progress, setProgress] = React.useState(25);
    function restart(){
        setIndex(0);
        setEndAnswers([]);
    }

    function summary(answers: boolean[]): React.ReactNode{
        return (
        <div>
            <ProgressBar progress={getPercentage(answers)} />
            <br />
            <p>Sie haben {getPercentage(answers)}% richtig!</p>
            <button type="submit" onClick={restart}>Erneut Versuchen</button>
        </div>
        );
    }
    function getPercentage(answers: boolean[]){
        if(answers) {
        let count = 0;
        for(let i = 0; i < answers.length; i++){
            if(answers[i]){
                count++;
            }
        }
        return Math.round((count / answers.length* 100));
    }
}
    const questions = props.questions.map((question, index) => {
        return <div key={index}>
            <ProgressBar progress={(index/props.questions.length)*100} />
            <QuestionCard 
            answers={question.answers} 
            correctAnswers={question.correctAnswers} 
            explanation={question.explanation} 
            question={question.question}
            nextIndex={setIndex}
            setEndAnswers={setEndAnswers}
            endAnswer={endAnswers}
            id={index}/>
        </div>
    });
    return (
        <>
           {index < questions.length ? questions[index] : summary(endAnswers)}
        </>
    );
  }
  
export default Quiz; 
  