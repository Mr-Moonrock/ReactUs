import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css'

const BoxList = () => {
  const [ box, setBox ] = useState([]);

  const newBox = ({ backgroundColor, width, height }) => {
    setBox([...box, { backgroundColor, width, height }])
  }

  const removeBox = (idx) => {
    const updatedBox = [...box];
    updatedBox.splice(idx, 1);
    setBox(updatedBox);
  }

  return (
    <div className='Box-container'>
      <h1 className='Box-Heading'> Color Box Maker </h1>
      <NewBoxForm newBox={newBox} />
      {box.map(( b, idx ) => (
        <Box 
          key={idx}
          backgroundColor={b.backgroundColor}
          width={b.width}
          height={b.height}
          removeBox={() => removeBox(idx)}
        />
      ))}
    </div>
  );
}

export default BoxList;