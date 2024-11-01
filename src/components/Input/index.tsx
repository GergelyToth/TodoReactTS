import { FC } from 'react';
import './input.css';

interface InputPropsType {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};
const Input: FC<InputPropsType> = ({ value, placeholder, onChange }: InputPropsType) => {
  return (
    <input
      className='Input'
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={(e) => {onChange(e.target.value)}}
    />
  );
}

export default Input;
