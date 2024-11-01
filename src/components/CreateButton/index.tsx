import { FC } from 'react';
import './CreateButton.css';
import plusSvg from '../../assets/plus.svg';

interface CreateButtonType {
  onClick: () => void;
};
const CreateButton: FC<CreateButtonType> = ({onClick}: CreateButtonType) => {
  return (
    <button
      type='submit'
      className='CreateButton'
      onClick={() => {onClick()}}
      aria-label='Submit new task'
    >
      Add
      <img src={plusSvg} alt='+' />
    </button>
  );
}

export default CreateButton;
