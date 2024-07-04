import React, { useEffect } from 'react';

const Results = ({ question, isCorrect, nextQuestion, returnHome }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <div>
      <h1>Result</h1>
      <h2>No.{question.number}</h2>
      <h2>{question.question}</h2>
      <h3 className={isCorrect ? 'correct' : 'incorrect'}>
        {isCorrect ? 'Correct！' : 'Incorrect'}
      </h3>
      
      {question.explanations.map((explanation, index) => (
        <div key={index}>
          <div className={question.correct.includes(explanation) ? 'correct' : 'bord'}>
          {explanation !== '' ? '〇 ' : ''}{explanation}
          </div>
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
