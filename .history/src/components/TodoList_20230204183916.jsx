import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const navigation = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigation("/signin");
  });

  return (
    <section>
      <input data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button">추가</button>
    </section>
  );
}
