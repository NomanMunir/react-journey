import './App.css';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import { TodoContextProvider } from './components/store/todo-context';

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <NewTodo />
        <Todos />
      </div>
    </TodoContextProvider>
  );
}

export default App;