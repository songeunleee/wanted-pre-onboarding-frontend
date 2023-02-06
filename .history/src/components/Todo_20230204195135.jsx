import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../api/api";

export default function Todo({ todo, update }) {
  const [edit, setEdit] = useState(false);
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
      {!edit && (
        <div>
          <label>
            <input type="checkbox" onChange={handleIsCompleted} />
            <span>{todo.todo}</span>
          </label>
          <button
            className="border"
            data-testid="modify-button"
            onClick={handleEdit}
          >
            수정
          </button>
          <button data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      )}
    </li>
  );
}
