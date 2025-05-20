import './App.css';
import Todo from './components/models/todo';
import Todos from './components/Todos';

function App() {
  return (
       <div className="App">
        
      <Todos items={[new Todo("Learn React"), new Todo("Learn TypeScript")]}/>
    </div>
  );
}

export default App;
