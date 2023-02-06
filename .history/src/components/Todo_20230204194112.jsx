import React from "react";
import { deleteTodo, updateTodo } from "../api/api";

export default function Todo({ todo, update }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
    update();
  };

  const handleIsCompleted = (e) => {
    updateTodo(todo.id, todo.todo, e.target.checked);
  };

  const handleEdit = () => {};
  return (
    <li>
      <label>
        <input
          className="invisible"
          type="checkbox"
          onChange={handleIsCompleted}
        />
        <span>{todo.todo}</span>
      </label>
      <button data-testid="modify-button" onClick={handleEdit}>
        수정
      </button>
      <button data-testid="delete-button" onClick={handleDelete}>
        삭제
      </button>
    </li>
  );
}
