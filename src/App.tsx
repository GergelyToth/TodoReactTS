import { useState } from 'react';
import Input from './components/Input';
import './App.css';

function App() {
  const [newTaskValue, setNewTaskValue] = useState('');

  return (
    <>
      <header>
        <h1>Todo</h1>
        {/* Add logo */}
      </header>
      <main>
        <div className='wrapper'>
          <Input
            placeholder="Add a new task"
            value={newTaskValue}
            onChange={(value) => {setNewTaskValue(value)}}
          />
        </div>
      </main>
    </>
  );
}

export default App;
