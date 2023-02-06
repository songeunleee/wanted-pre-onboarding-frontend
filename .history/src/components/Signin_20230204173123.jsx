import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { signin } from "../api/api";

export default function Signin() {
  const [data, setData] = useState();
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/signup");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signin();
  };
  const handleChange = (e = {});
  return (
    <form>
      <input data-testid="email-input" onChange={handleChange} name="email" />
      <input
        data-testid="password-input"
        onChange={handleChange}
        name="password"
      />
      <button data-testid="signup-button" onSubmit={handleSubmit}>
        제출
      </button>
      <button data-testid="signup-button" onClick={handleClick}>
        회원가입
      </button>
    </form>
  );
}
