import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodo } from "../api/api";
import AddInput from "./AddInput";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState();
  const navigation = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigation("/signin");
    getTodo().then((res) => setTodos(res));
  }, [todos]);

  return (
    <ul>
      <AddInput />
      {todos &&
        todos.map((todo) => {
          <Todo todo={todo} />;
        })}
    </ul>
  );
}
