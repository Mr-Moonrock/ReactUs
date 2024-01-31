import React, { useState } from 'react';

const NewBoxForm = ({ newBox }) => {

  const [ backgroundColor, setBackgroundColor ] = useState('');
  const [ width, setWidth ] = useState('');
  const [ height, setHeight ] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    newBox({ backgroundColor, width, height });
    setBackgroundColor('');
    setWidth('');
    setHeight('');
  };

  return (
    <div className='Form-container'>
      <form onSubmit= {handleSubmit}>
        <label className='Form-label'>
          Background Color: 
          <input 
            type='text'
            className='Form-Input'
            value={backgroundColor} 
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>

        <label className='Form-label'>
          Width (px/em):
          <input 
            type='text'
            className='Form-Input'
            value={width} 
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>

        <label className='Form-label'>
          Height (px/em): 
          <input 
            type='text'
            className='Form-Input'
            value={height} 
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>

        <button type="submit" className='Form-btn'> Create New Box </button>
      </form>
    </div>
  );
};

export default NewBoxForm;