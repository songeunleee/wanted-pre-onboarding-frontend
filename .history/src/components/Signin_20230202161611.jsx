import React from "react";

export default function Signin() {
  return (
    <section>
      <input data-testid="email-input" />
      <input data-testid="password-input" />
      <button data-testid="signup-button">제출</button>
    </section>
  );
}
