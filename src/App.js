import React, { useState } from 'react';
import Home from './components/HomePage';
import Quiz from './components/QuizPage';
import Results from './components/ResultsPage';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [duplicateNum, setDuplicateNum] = useState(null);
  
  const startQuiz = async () => {
    const response = await fetch(process.env.PUBLIC_URL + '/data/questions.json');
    const data = await response.json();
    const randomNum = Math.round(Math.random() * (data.length - 1));

    setQuestions(data);
    setCurrentQuestionIndex(randomNum);
    setDuplicateNum(randomNum);

    setPage('quiz');
  };
  
  const submitAnswers = (selectedChoices) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswers = currentQuestion.correct;
    const isCorrect = correctAnswers.every(answer => selectedChoices.includes(answer)) && selectedChoices.length === correctAnswers.length;
    setIsCorrect(isCorrect);
    setUserAnswers([...userAnswers, selectedChoices]);
    setPage('results');
  };

  const nextQuestion = () => {
    if (duplicateNum !== null) {
      questions.splice(duplicateNum, 1);
    }

    if (questions.length > 0) {
      const randomNum = Math.round(Math.random() * (questions.length - 1));
      setCurrentQuestionIndex(randomNum);
      setDuplicateNum(randomNum);

      setPage('quiz');
    } else {
      setPage('home');
    }
  };

  const returnHome = () => {
    setPage('home');
  }

  return (
    <div className="App">
      {page === 'home' && <Home startQuiz={startQuiz} />}
      {page === 'quiz' && <Quiz question={questions[currentQuestionIndex]} submitAnswers={submitAnswers}/>}
      {page === 'results' && <Results question={questions[currentQuestionIndex]} isCorrect={isCorrect} nextQuestion={nextQuestion} returnHome={returnHome}/>}
    </div>
  );
}

export default App;
