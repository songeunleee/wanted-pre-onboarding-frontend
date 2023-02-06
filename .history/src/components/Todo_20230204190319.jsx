import React from "react";

export default function Todo({ todo }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo.todo}</span>
      </label>
    </li>
  );
}
