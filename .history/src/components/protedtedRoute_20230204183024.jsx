import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProtedtedRoute({ children }) {
  const navigation = useNavigate();
  if (localStorage.getItem("access_token")) navigation("/todo");
  return children;
}
