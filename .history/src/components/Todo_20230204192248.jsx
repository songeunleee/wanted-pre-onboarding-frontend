import React from "react";
import { deleteTodo } from "../api/api";

export default function Todo({ todo, update }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
    update();
  };

  const handleIsCompleted = (e) => {
    console.log(e.current);
  };
  return (
    <li>
      <label>
        <input type="checkbox" onChange={handleIsCompleted} />
        <span>{todo.todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button" onClick={handleDelete}>
        삭제
      </button>
    </li>
  );
}
