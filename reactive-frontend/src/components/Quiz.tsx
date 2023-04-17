import * as React from "react"
import { Question } from "../types/types.ts";
import QuestionCard from "./QuestionCard.tsx";
type Props = {
    questions: Question[];
}

function Quiz(props: Props) {
    const [index, setIndex] = React.useState<number>(0);
    const [endAnswers, setEndAnswers] = React.useState<boolean[]>([]);

    function summary(answers: boolean[]): React.ReactNode{
        return (
        <div>
            Sie haben {getPercentage(answers)}% richtig!
        </div>
        );
    }
    function getPercentage(answers: boolean[]){
        console.log(answers);
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
  