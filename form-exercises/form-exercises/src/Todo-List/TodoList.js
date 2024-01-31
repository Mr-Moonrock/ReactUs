import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import './TodoList.css'

const TodoList = () => {

  const [ todos, setTodos ] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className='TodoList-container'>
      <h1 className= 'TodoList-Heading'> Todo List </h1>
      <div>
        <NewTodoForm addTodo={addTodo}/>
      </div>
      <ul className='TodoList-Ul'> 
        {todos.map((todo) => (
          <li className='TodoList-Li' key={todo.id}>
            {todo.text}
            <button className='TodoList-remove-btn' onClick={() => removeTodo(todo.id)}> X </button> 
          </li>
        ))}
      </ul>
    </div>
  )
};

export default TodoList;