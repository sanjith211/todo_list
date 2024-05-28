import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input }]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className="list">
      <div>
        <div className="input">
          <input
            type="text"
            placeholder="Enter the details"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
      <ul>
        {todos.map((value, index) => (
          <li key={index} className="list-display">
            <span>{value.text}</span>
            <button onClick={handleDelete}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
