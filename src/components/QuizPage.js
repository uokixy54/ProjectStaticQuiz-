import React, { useState, useEffect } from 'react';
import Question from './QuestionPage';

const Quiz = ({ currentQuestionNum, questionLength, question, submitAnswers }) => {
  const [selectedChoices, setSelectedChoices] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleCheckboxChange = (choice) => {
    setSelectedChoices(prev => {
      if (prev.includes(choice)) {
        return prev.filter(c => c !== choice);
      } else {
        return [...prev, choice];
      }
    });
  };

  return (
    <div>
      <h1>Question</h1>
      <h2>No.{question.number}</h2>
      <progress id='progress' max={questionLength} value={currentQuestionNum - 1}></progress>
      <label htmlFor="progress">  {currentQuestionNum}/{questionLength}問</label>
      <Question question={question} handleCheckboxChange={handleCheckboxChange} />

      <div className='button-container'>
        <button onClick={() => submitAnswers(selectedChoices)}><span>Confirm</span></button>
      </div>

    </div>
  );
};

export default Quiz;
