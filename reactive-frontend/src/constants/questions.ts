import { Question } from "../types/types"

export const questions: Question[] = 
[
    {
      question: 'Was ist am besten?',
      answers:
          [
            {id:1, text:"Berlin"},
            {id:2, text:"Hamburg"},
            {id:3, text:"München"},
            {id:4, text:"Kölln"},
          ],
        correctAnswers: [2],
        explanation: 'Weil cool'
    },
    {
      question: 'Wo liegt München?',
      answers:
          [
            {id:1, text:"Bayern"},
            {id:2, text:"Hölle"},
            {id:3, text:"München"},
            {id:4, text:"Stein"},
          ],
        correctAnswers: [1,2,3],
        explanation: 'Bayern halt'
    }
]