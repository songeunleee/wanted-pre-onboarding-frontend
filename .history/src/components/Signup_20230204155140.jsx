import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [disable, setDisaable] = useState(true);
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/signup");
  };
  const handleChange = (e) => {
    if (e.target.name === "email") {
      console.log(/[a-z0-9]+@[a-z0-9]/.test(e.target.value));
    } else {
      e.target.value.length < 8 ? setDisaable(true) : setDisaable(false);
    }
  };
  return (
    <form>
      <input data-testid="email-input" onChange={handleChange} name="email" />
      <input
        data-testid="password-input"
        onChange={handleChange}
        name="password"
      />
      <button disabled data-testid="signup-button">
        제출
      </button>
    </form>
  );
}
