import { signInWithEmailAndPassword } from "firebase/auth";
import { authService } from "../../../firebase";
import React, { useState } from "react";
import "./signin.scss";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToHome = useNavigate();

  const onChangeInputValue = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSigninClick = async (e) => {
    e.preventDefault();
    let data;
    data = await signInWithEmailAndPassword(authService, email, password);
    console.log(data);
    alert("로그인 하였습니다.");
    goToHome("/");
  };

  return (
    <form onSubmit={onSigninClick}>
      <div>
        <input
          className="email-input"
          name="email"
          type="text"
          placeholder="이메일"
          required
          value={email}
          onChange={onChangeInputValue}
        />
      </div>
      <div>
        <input
          className="password-input"
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={onChangeInputValue}
        />
      </div>
      <input className="login-btn" type="submit" value="로그인" />
    </form>
  );
};

export default Signin;
