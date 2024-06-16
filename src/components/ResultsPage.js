import React from 'react';

const Results = ({ question, isCorrect, nextQuestion, returnHome }) => {
  return (
    <div>
      <h1>Result</h1>
      <h3 className={isCorrect ? 'correct' : 'incorrect'}>
        {isCorrect ? 'Correct！' : 'Incorrect'}
      </h3>
      
      {question.explanations.map((explanation, index) => (
        <div key={index}>
          {explanation}
          <br/>
          {question.descriptions[index]}
        </div>
      ))}

      <div className='button-container'>
        <button onClick={nextQuestion}><span>Next</span></button>
        <button onClick={returnHome}><span>Return Home</span></button>
      </div>
      
    </div>
  );
};

export default Results;
