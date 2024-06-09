import React from 'react';

const Results = ({ question, isCorrect, nextQuestion, returnHome }) => {
  return (
    <div>
      <h1>Result</h1>
      <p>{isCorrect ? 'Correct！' : 'Incorrect'}</p>
      {question.explanations.map((explanation, index) => (
        <div key={index}>
          {explanation}
          <br/>
          {question.descriptions[index]}
        </div>
      ))}
      <button onClick={nextQuestion}>Next</button>
      <button onClick={returnHome}>Return Home</button>
    </div>
  );
};

export default Results;
