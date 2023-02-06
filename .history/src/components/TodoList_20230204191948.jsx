import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodo } from "../api/api";
import AddInput from "./AddInput";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState();
  const [update, setUpdate] = useState(true);
  const navigation = useNavigate();
  const todosUpdate = () => {
    setUpdate((pre) => !pre);
  };
  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigation("/signin");
    getTodo().then((res) => setTodos(res));
  }, [update]);
  console.log(update);
  return (
    <ul>
      <AddInput />
      {todos &&
        todos.map((todo) => (
          <Todo update={todosUpdate} key={todo.id} todo={todo} />
        ))}
    </ul>
  );
}
