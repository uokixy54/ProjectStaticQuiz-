import React from 'react';

const Question = ({ question, handleCheckboxChange }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      {question.choices.map((choice, index) => (
        <div key={index}>
          <label className='question-selector'>
            <input
              type="checkbox"
              value={choice}
              onChange={() => handleCheckboxChange(choice)}
            />
            {choice}
          </label>
          <br/>
        </div>
      ))}
    </div>
  );
};

export default Question;
