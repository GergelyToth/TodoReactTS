import { useState } from 'react';
import Input from './components/Input';
import CreateButton from './components/CreateButton';
import './App.css';

function App() {
  const [newTaskValue, setNewTaskValue] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTaskValue) {
      setTodos([...todos, newTaskValue]);
      setNewTaskValue('');
    }
  }

  return (
    <>
      <header>
        <h1>Todo</h1>
        {/* Add logo */}
      </header>
      <main>
        <div>
          <form className='wrapper' onSubmit={(e) => {
            e.preventDefault();
            handleAddTask();
          }}>
            <Input
              placeholder="Add a new task"
              value={newTaskValue}
              onChange={(value) => {setNewTaskValue(value)}}
            />
            <CreateButton onClick={handleAddTask} />
          </form>
        </div>

        <div>
          {todos.map((todo, index) => <div key={index}>{todo}</div>)}
        </div>
      </main>
    </>
  );
}

export default App;
