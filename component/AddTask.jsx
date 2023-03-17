import { useState } from 'react';

const AddTask = ({ setTasks }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((prevTasks) => [...prevTasks, text]);
  };

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type='button' value='Add' onClick={handleSubmit} />
    </div>
  );
};

export default AddTask;
