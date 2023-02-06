import React from "react";

export default function AddInput() {
  return (
    <div>
      <input data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button">추가</button>
    </div>
  );
}
