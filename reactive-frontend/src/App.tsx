import './App.css';
import * as React from "react"
import Quiz from './components/Quiz.tsx';
import { questions } from './constants/questions.ts';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quiz questions={questions}></Quiz>
      </header>
    </div>
  );
}

export default App;
