import React, { useState } from 'react';

const useFlip = () => {

  const [ flipCard, setFlipCard ] = useState(true);

  const toggleCard = () => {
    setFlipCard(flipCard => !flipCard)
  };
  return [ flipCard, toggleCard ];
}

export default useFlip;


// const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };