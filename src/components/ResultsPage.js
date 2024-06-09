import React from 'react';

const Results = ({ isCorrect, nextQuestion }) => {
  return (
    <div>
      <h1>Result</h1>
      <p>{isCorrect ? 'Correct！' : 'Incorrect'}</p>
      <button onClick={nextQuestion}>Next</button>
      <button onClick={() => window.location.href = '/'}>Return Home</button>
    </div>
  );
};

export default Results;
