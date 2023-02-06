import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/api";

export default function Signup() {
  const [disable, setDisaable] = useState({ email: true, password: true });
  const [data, setData] = useState();
  const buttonRef = useRef();
  const navigation = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    signup(data.email, data.password).then(
      (res) => res === 201 && navigation("/signin")
    );
  };
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setData((pre) => ({ ...pre, email: e.target.value }));
      /[a-z0-9]+@[a-z0-9]/.test(e.target.value)
        ? setDisaable((pre) => ({ ...pre, email: false }))
        : setDisaable((pre) => ({ ...pre, email: true }));
    } else {
      setData((pre) => ({ ...pre, password: e.target.value }));
      e.target.value.length < 8
        ? setDisaable((pre) => ({ ...pre, password: true }))
        : setDisaable((pre) => ({ ...pre, password: false }));
    }
  };

  useEffect(() => {
    if (disable.email === false && disable.password === false) {
      buttonRef.current.removeAttribute("disabled");
      console.log(1);
    } else {
      buttonRef.current.setAttribute("disabled", true);
    }
  }, [disable]);
  useEffect(() => {
    if (localStorage.getItem("access_token")) navigation("/todo");
  }, []);
  return (
    <form>
      <input data-testid="email-input" onChange={handleChange} name="email" />
      <input
        data-testid="password-input"
        onChange={handleChange}
        name="password"
      />
      <button ref={buttonRef} data-testid="signup-button" onClick={handleClick}>
        제출
      </button>
    </form>
  );
}
