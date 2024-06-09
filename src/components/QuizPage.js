import React, { useState } from 'react';
import Question from './QuestionPage';

const Quiz = ({ question, submitAnswers }) => {
  const [selectedChoices, setSelectedChoices] = useState([]);

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
      <Question question={question} handleCheckboxChange={handleCheckboxChange} />
      <button onClick={() => submitAnswers(selectedChoices)}>Confirm</button>
    </div>
  );
};

export default Quiz;
