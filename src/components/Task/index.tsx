import { FC } from 'react';
import './Task.css';
import deleteDefault from '../../assets/delete.svg';
import deleteHover from '../../assets/delete-hover.svg';

interface TaskProp {
  id: number;
  task: string;
  isComplete: boolean;
  onComplete: (id: number, isComplete: boolean) => void;
  onDelete: (id: number) => void;
}
const Task: FC<TaskProp> = ({ id, task, isComplete, onComplete, onDelete }) => {
  return (
    <div className={`Task ${isComplete ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => {onComplete(id, !isComplete)}}
      />
      <span>{task}</span>
      <button type='button' onClick={() => onDelete(id)} aria-label='Delete Task'>
        <img className='default' src={deleteDefault} alt='Delete' />
        <img className='hover' src={deleteHover} alt='Delete' />
      </button>
    </div>
  );
}

export default Task;
