import React from "react";

export default function Signin() {
  const handleClick = () => {
    <Navigator to={"/signup"} />;
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
