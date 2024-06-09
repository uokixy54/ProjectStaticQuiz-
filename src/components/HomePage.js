import React from 'react';

const Home = ({ startQuiz }) => {
  return (
    <div>
      <h1>Salesforce Certified Administrator TEST v0</h1>
      <button onClick={startQuiz}>Start</button>
    </div>
  );
};

export default Home;
