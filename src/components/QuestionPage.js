import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import java from 'highlight.js/lib/languages/java';
import 'highlight.js/styles/default.css';

hljs.registerLanguage('java', java);

const Question = ({ question, handleCheckboxChange }) => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [question]);

  return (
    <div>
      {/* <pre>
        <code className="java">
          {question['previous-code'] && question['previous-code'].map((code, index) => (
            <React.Fragment key={index}>
              {code}
              {'\n'}
            </React.Fragment>
          ))}
        </code>
      </pre> */}
      <h2>{question.question}</h2>
      <pre>
        <code className="java">
          {question['following-code'] && question['following-code'].map((code, index) => (
            <React.Fragment key={index}>
              {code}
              {'\n'}
            </React.Fragment>
          ))}
        </code>
      </pre>
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
