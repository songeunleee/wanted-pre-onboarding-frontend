import React from "react";

export default function Signup() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/signup");
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
