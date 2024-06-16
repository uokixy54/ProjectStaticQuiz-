import React from 'react';

const Home = ({ startQuiz }) => {
  return (
    <div>
      <h1>Salesforce Certified Administrator TEST v0.2</h1>
      <h3>Version 24C1 Changes</h3>
      <p>Add a few more questions, Random sampling of questions, and Change button style.</p>
      <button onClick={startQuiz}><span>Start</span></button>
    </div>
  );
};

export default Home;
