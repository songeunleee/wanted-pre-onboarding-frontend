import React from "react";
import { Navigate } from "react-router-dom";

export default function Signin() {
  const handleClick = () => {
    <Navigate to="/singup" />;
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
