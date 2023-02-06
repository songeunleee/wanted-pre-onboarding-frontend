import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTodo } from "../api/api";
import AddInput from "./AddInput";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigation("/signin");
    setTodos(getTodo());
  });

  return (
    <ul>
      <AddInput />
    </ul>
  );
}
