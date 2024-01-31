import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './TodoList.css'

const NewTodoForm = ({ addTodo }) => {

  const initialState = {
    todo: ''
  }

  const [ formData, setFormData ]= useState(initialState);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { todo } = formData;
    addTodo({ id: uuid(), text: todo });
    setFormData(initialState);
    // alert(`Added a todo to the list, ${todo}`)
  }

  return (
    <div className='TodoForm-container'>
    <form className='NewTodoForm' onSubmit={handleSubmit}>
      <label className='NewTodoForm-label' htmlFor='todo'> Todo: </label>
      <input
        id='todo'
        className='TodoForm-Input' 
        type='text'
        name='todo'
        value={formData.todo}
        onChange={handleChange}
        />
      
      <button className='TodoForm-btn' type='submit'> Add to list </button>
    </form>
    </div>
  )
}

export default NewTodoForm;