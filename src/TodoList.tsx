import React from 'react';

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div className="todo-row" key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)} className="delete-button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
