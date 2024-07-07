import React, { useEffect } from 'react';

const Results = ({ question, questionLength, currentQuestionNum,  isCorrect, nextQuestion, returnHome }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <div>
      <h1>Result</h1>
      <h2>No.{question.number}</h2>
      <progress id='progress' max={questionLength} value={currentQuestionNum}></progress>
      <label for="progress">  {currentQuestionNum}/{questionLength}問</label>
      <div className='question-container'>
        <h2 style={{ whiteSpace: 'pre-line' }}>{question.question}</h2>
      </div>
      <h3 className={isCorrect ? 'correct' : 'incorrect'}>
        {isCorrect ? 'Correct！' : 'Incorrect'}
      </h3>
      
      {question.explanations.map((explanation, index) => (
        <div key={index} style={{ whiteSpace: 'pre-line' }}>
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
