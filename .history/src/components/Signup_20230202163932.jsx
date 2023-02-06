import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/signup");
  };
  const handleChange = (e) => {
    console.log(/[a-z0-9]+@[a-z0-9]/.test(e.target.value));
  };
  return (
    <form>
      <input data-testid="email-input" onChange={handleChange} />
      <input data-testid="password-input" />
      <button data-testid="signup-button">제출</button>
    </form>
  );
}
