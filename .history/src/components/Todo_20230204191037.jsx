import React from "react";
import { deleteTodo } from "../api/api";

export default function Todo({ todo }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo.todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button" onClick={handleDelete}>
        삭제
      </button>
    </li>
  );
}
