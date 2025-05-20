import './App.css';
import Todo from './models/todo';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  function handleAddTodo(text:string){
    const todoItem = new Todo(text);
      setTodoItems((prev)=>[...todoItems, todoItem]);
  }

  function handleRemoveTodo(id:string)
  {
    setTodoItems((prev)=>prev.filter(todo=>todo.id!== id));
  }

  return (
       <div className="App">
        <NewTodo onAddTodo={handleAddTodo}/>
      <Todos items={todoItems} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default App;
