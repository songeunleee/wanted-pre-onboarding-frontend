import React, { useState } from "react";

export default function AddInput() {
  const [todo, setTodo] = useState();
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleClick = () => {};
  return (
    <div>
      <input data-testid="new-todo-input" onChange={handleChange} />
      <button data-testid="new-todo-add-button" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}
