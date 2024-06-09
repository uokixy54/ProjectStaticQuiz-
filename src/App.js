import React, { useState } from 'react';
import Home from './components/HomePage';
import Quiz from './components/QuizPage';
import Results from './components/ResultsPage';
import questionsData from './data/questions.json';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  // const [questions, setQuestions] = useState(questionsData);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // const startQuiz = () => {
  //   setCurrentQuestionIndex(0);
  //   setPage('quiz');
  // };

  const startQuiz = async () => {
    const response = await fetch(process.env.PUBLIC_URL + '/data/questions.json');
    const data = await response.json();
    setQuestions(data);
    setCurrentQuestionIndex(0);
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
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setPage('quiz');
    } else {
      setPage('home');
    }
  };

  return (
    <div className="App">
      {page === 'home' && <Home startQuiz={startQuiz} />}
      {page === 'quiz' && <Quiz question={questions[currentQuestionIndex]} submitAnswers={submitAnswers} />}
      {page === 'results' && <Results isCorrect={isCorrect} nextQuestion={nextQuestion} />}
    </div>
  );
}

export default App;
