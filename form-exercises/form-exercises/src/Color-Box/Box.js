import React from 'react';

const Box = ({ backgroundColor, width, height, removeBox }) => {
  const boxStyle = {
    backgroundColor,
    width,
    height,
  };

  return (
    <div className='Box' style={boxStyle}>
      <button onClick={removeBox}> X </button>
    </div>
  );
};

export default Box;