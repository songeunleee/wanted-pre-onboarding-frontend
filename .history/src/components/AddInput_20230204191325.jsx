import React, { useState } from "react";
import { createTodo } from "../api/api";

export default function AddInput() {
  const [todo, setTodo] = useState();
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleClick = () => {
    createTodo(todo);
  };
  return (
    <form>
      <input data-testid="new-todo-input" onChange={handleChange} />
      <button data-testid="new-todo-add-button" onClick={handleClick}>
        추가
      </button>
    </form>
  );
}
