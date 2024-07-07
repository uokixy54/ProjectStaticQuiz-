import React, { useState, useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import java from 'highlight.js/lib/languages/java';
import 'highlight.js/styles/default.css';

hljs.registerLanguage('java', java);

// const shuffleArray = (array) => {
//   let newArray = array.slice();

//   for (let i = 0; i < newArray.length - 1; i++) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//   }
//   return newArray;
// }

const Question = ({ question, handleCheckboxChange }) => {
  // const [choices, setChoices] = useState([]);

  // 再レンダリングして状態を最新にする
  // useEffect(() => {
  //   const shuffledChoices = shuffleArray(question.choices);
  //   setChoices(shuffledChoices);
  //   question.choices = shuffledChoices; 
  // }, []);

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [question]);

  return (
    <div>
      <div className='question-container'>
        {question['previous-code'] && question['previous-code'].length > 0 && (
        <pre>
          <code className="java">
            {question['previous-code'].map((code, index) => (
              <React.Fragment key={index}>
                {code}
                {'\n'}
              </React.Fragment>
            ))}
          </code>
        </pre>
        )}

        <h2>{question.question}</h2>
        {question['following-code'] && question['following-code'].length > 0 && (
          <pre>
            <code className="java">
              {question['following-code'].map((code, index) => (
                <React.Fragment key={index}>
                  {code}
                  {'\n'}
                </React.Fragment>
              ))}
            </code>
          </pre>
        )}
      </div>

      <div className='question-selector-container'>
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
    </div>
  );
};

export default Question;
