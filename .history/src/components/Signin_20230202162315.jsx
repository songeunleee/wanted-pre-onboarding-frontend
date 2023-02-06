import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/signin");
  };
  return (
    <section>
      <input data-testid="email-input" />
      <input data-testid="password-input" />
      <button data-testid="signup-button">제출</button>
      <button data-testid="signup-button" onClick={handleClick}>
        회원가입
      </button>
    </section>
  );
}
