import React, { useState } from 'react';
import Login from './components/LoginPage';
import Home from './components/HomePage';
import Quiz from './components/QuizPage';
import Results from './components/ResultsPage';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [currentQuestionNum, setCurrentQuestionNum] = useState();
  const [questionLength, setQuestionLength] = useState();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [duplicateNum, setDuplicateNum] = useState(null);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  
  const authUser = async (password) => {
    const response = await fetch(process.env.PUBLIC_URL + '/data/userinfo.json');
    const AUTHENTICATION_CODE = await response.json();

    AUTHENTICATION_CODE.forEach(userInfo => {
      if (userInfo.authcode === password) {
        setPage('home');
      } else {
        setPage('login');
      }
    });

  };

  const restartQuiz = () => {
    if (wrongQuestions.length > 0) {
      const randomNum = Math.round(Math.random() * (wrongQuestions.length - 1));

      setQuestionLength(wrongQuestions.length);
      setQuestions(wrongQuestions);
      setCurrentQuestionIndex(randomNum);
      setDuplicateNum(randomNum);
      setWrongQuestions([]);
      setCurrentQuestionNum(1);

      setPage('quiz');
    }
  }

  const startQuiz = async (selectedValue) => {
    let data = "";
    if (selectedValue === 'SalesforceCertifiedAdministrator') {
      const response = await fetch(process.env.PUBLIC_URL + '/data/SalesforceCertifiedAdministratorQuestions.json');
      data = await response.json();

    } else if (selectedValue === 'SalesforcePlatformAppBuilder') {
      const response = await fetch(process.env.PUBLIC_URL + '/data/SalesforcePlatformAppBuilderQuestions.json');
      data = await response.json();

    } else if (selectedValue === 'SalesforcePlatformDeveloperI') {
      const response = await fetch(process.env.PUBLIC_URL + '/data/SalesforcePlatformDeveloperIQuestions.json');
      data = await response.json();

    }
  const randomNum = Math.round(Math.random() * (data.length - 1));

    setQuestionLength(data.length);
    setQuestions(data);
    setCurrentQuestionIndex(randomNum);
    setDuplicateNum(randomNum);
    setWrongQuestions([]);
    setCurrentQuestionNum(1);

    setPage('quiz');
  };
  
  const submitAnswers = (selectedChoices) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswers = currentQuestion.correct;
    const isCorrect = correctAnswers.every(answer => selectedChoices.includes(answer)) && selectedChoices.length === correctAnswers.length;

    if (!isCorrect) {
      setWrongQuestions([...wrongQuestions, currentQuestion]);
    }

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

      setCurrentQuestionNum(currentQuestionNum + 1);
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
      {page === 'login' && <Login authUser={authUser} />}
      {page === 'home' && <Home startQuiz={startQuiz} restartQuiz={restartQuiz} wrongQuestions={wrongQuestions} />}
      {page === 'quiz' && <Quiz currentQuestionNum={currentQuestionNum} questionLength={questionLength} question={questions[currentQuestionIndex]} submitAnswers={submitAnswers}/>}
      {page === 'results' && <Results currentQuestionNum={currentQuestionNum} questionLength={questionLength} question={questions[currentQuestionIndex]} isCorrect={isCorrect} nextQuestion={nextQuestion} returnHome={returnHome}/>}
    </div>
  );
}

export default App;
