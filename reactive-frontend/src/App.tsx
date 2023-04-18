import './App.css';
import * as React from "react"
import Quiz from './components/Quiz.tsx';
import { questions } from './constants/questions.ts';
function App() {
  return (
    <div className="App">
        <h1>Quiz zur IT-Sicherheit der MooveTeq</h1>
        <Quiz questions={questions}></Quiz>
    </div>
  );
}

export default App;
