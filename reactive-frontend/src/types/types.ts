export type Question ={
    question: string;
    correctAnswers: number[];
    answers: Answer[];
    explanation: string;
    nextIndex?: React.Dispatch<React.SetStateAction<number>>
    setEndAnswers?: React.Dispatch<React.SetStateAction<boolean[]>>
    endAnswer?: boolean[];
    id?: number;
}
export type Answer = {
    id: number;
    text: string;
}
export type Quiz = {
    questions: Question[];
}