import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [disable, setDisaable] = useState({ email: true, password: true });
  const buttonRef = useRef();
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/signup");
  };
  const handleChange = (e) => {
    if (e.target.name === "email") {
      /[a-z0-9]+@[a-z0-9]/.test(e.target.value)
        ? setDisaable((pre) => ({ ...pre, email: true }))
        : setDisaable((pre) => ({ ...pre, email: false }));
    } else {
      e.target.value.length < 8
        ? setDisaable((pre) => ({ ...pre, password: true }))
        : setDisaable((pre) => ({ ...pre, password: false }));
    }
  };

  useEffect(() => {
    if (disable.email === false && disable.password === false) {
      buttonRef.current.setAttribute("disabled");
      console.log(1);
    }
  }, [disable]);
  return (
    <form>
      <input data-testid="email-input" onChange={handleChange} name="email" />
      <input
        data-testid="password-input"
        onChange={handleChange}
        name="password"
      />
      <button disabled ref={buttonRef} data-testid="signup-button">
        제출
      </button>
    </form>
  );
}
