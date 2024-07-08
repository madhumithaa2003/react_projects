import React, { useState, ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
  onSubmit: (todo: { id: number; text: string }) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
};

export default TodoForm;
