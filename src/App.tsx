import { useState } from 'react';
import Input from './components/Input';
import CreateButton from './components/CreateButton';
import Task from './components/Task';
import './App.css';
import clipboard from './assets/clipboard.png';
import logo from './assets/logo.svg';

interface TodoType {
  id: number;
  task: string;
  completed: boolean;
  created: Date;
}
let uniqueId = 0;

const mockData = [
  {
    id: 1000,
    task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false,
    created: new Date(),
  },
  {
    id: 1001,
    task: 'Integer urna',
    completed: false,
    created: new Date(),
  },
  {
    id: 1002,
    task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: true,
    created: new Date(),
  },
]

function App() {
  const [newTaskValue, setNewTaskValue] = useState('');
  const [todos, setTodos] = useState<TodoType[]>(mockData);

  const handleAddTask = () => {
    if (newTaskValue) {
      const newTaskObject = {
        id: uniqueId++,
        task: newTaskValue,
        completed: false,
        created: new Date(),
      };
      setTodos([...todos, newTaskObject]);
      setNewTaskValue('');
    }
  }

  const handleTaskComplete = (id: number, completed: boolean) => {
    // find the id of the task and set the completed value on it, +state
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = completed;
      setTodos(newTodos);
    }
  }

  const handleTaskDelete = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <>
      <header>
        <img src={logo} alt='Todo' />
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

        <div className='task-header'>
          <div className='task-header-created'>
            <span>Created</span>
            <span className='task-header-counter'>{totalTodos}</span>
          </div>
          <div className='task-header-completed'>
            <span>Completed</span>
            <span className='task-header-counter'>{completedTodos} of {totalTodos}</span>
          </div>
        </div>

        <div className='task-body'>
          {todos.length === 0 && (
            <>
              <hr />
              <div className="no-todos">
                <img src={clipboard} alt='No todos found' />
                <p className='bold'>
                  You don&lsquo;t have any tasks registered yet
                </p>
                <p>
                  Create tasks and organize your to-do items
                </p>
              </div>
            </>
          )}
          {todos.length > 0 && todos.map((todo) => (
            <Task
              key={todo.id}
              id={todo.id}
              task={todo.task}
              isComplete={todo.completed}
              onComplete={handleTaskComplete}
              onDelete={handleTaskDelete}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
