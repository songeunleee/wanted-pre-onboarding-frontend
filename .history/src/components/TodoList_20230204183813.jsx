import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const navigation = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigation("/signin");
  });

  return <div>TodoList</div>;
}
