import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Signin() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/signup");
  };
  const handleSubmit = () => {};
  return (
    <form>
      <input data-testid="email-input" />
      <input data-testid="password-input" />
      <button data-testid="signup-button" onClick={handleSubmit}>
        제출
      </button>
      <button data-testid="signup-button" onClick={handleClick}>
        회원가입
      </button>
    </form>
  );
}
