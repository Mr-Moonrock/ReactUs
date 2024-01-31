import BoxList from './Color-Box/BoxList';
import TodoList from './Todo-List/TodoList';
import './App.css'


function App() {
  return (
    <div className="App">
      <div className='BoxList-Div'>
        <BoxList />
      </div>
      <div className='TodoList-Div'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
