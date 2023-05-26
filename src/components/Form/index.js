import { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        required
        name="todo"
        id="todo"
        value={inputValue}
        onChange={handleInput}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
