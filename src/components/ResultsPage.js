import React from 'react';

const Results = ({ isCorrect, nextQuestion, returnHome }) => {
  return (
    <div>
      <h1>Result</h1>
      <p>{isCorrect ? 'Correct！' : 'Incorrect'}</p>
      <button onClick={nextQuestion}>Next</button>
      <button onClick={returnHome}>Return Home</button>
    </div>
  );
};

export default Results;
