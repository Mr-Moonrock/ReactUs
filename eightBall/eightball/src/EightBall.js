import React, { useState, useEffect } from 'react';
import './EightBall.css'

const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

const EightBall = () => {
  
  const [backgroundColor, setBackgroundColor] = useState('');
  const [randomAnswer, setRandomAnswer] = useState('');

  useEffect(() => {
    getRandomAnswer();
  }, []);

  const getRandomAnswer = () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const {msg, color} = answers[randomIdx];
    
    setBackgroundColor(color);
    setRandomAnswer(msg);

    return msg;
  }

  
 
  return (

    <div className='eightBall'>
      <h1> EightBall </h1>
      <div className="eightball-circle">
        <div
          className="eightball-answer-triangle"
          style={{ borderBottom: `200px solid ${backgroundColor}` }}
        ></div>
        <h4 className="eightball-answer"> {randomAnswer}</h4>
      </div>
      <button onClick={getRandomAnswer}> Get Answer </button>
    </div>
  )
}

export default EightBall; 