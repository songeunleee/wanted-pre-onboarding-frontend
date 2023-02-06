import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddInput from "./AddInput";

export default function TodoList() {
  const navigation = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigation("/signin");
  });

  return (
    <section>
      <AddInput />
    </section>
  );
}
