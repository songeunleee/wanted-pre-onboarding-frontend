import React from "react";

export default function Todo({ todo }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo.todo}</span>
      </label>
      <input data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button">추가</button>
    </li>
  );
}
