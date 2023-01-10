import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authService } from "../../../firebase";
import "./signup.scss";

const Signup = ({ setIsLoginToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChecked, setPasswordChecked] = useState("");
  const [createDisplayName, setCreateDisplayName] = useState("");

  const onChangeInputValue = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "displayname") {
      setCreateDisplayName(value);
    } else if (name === "passwordChecked") {
      setPasswordChecked(value);
    }
  };

  const onSignupClick = async (e) => {
    e.preventDefault();
    if (password === passwordChecked) {
      let data;
      const auth = getAuth();
      data = await createUserWithEmailAndPassword(authService, email, password);
      updateProfile(auth.currentUser, {
        displayName: createDisplayName,
      });
      alert("회원가입 완료");
      console.log(data);
      setIsLoginToggle(false);
    } else {
      alert("회원가입 실패");
    }
  };
  return (
    <div>
      <form onSubmit={onSignupClick}>
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
        <div>
          <input
            className="password-input-check"
            name="passwordChecked"
            type="password"
            placeholder="비밀번호 확인"
            required
            value={passwordChecked}
            onChange={onChangeInputValue}
          />
        </div>
        <div>
          <input
            className="displayname-input"
            name="displayname"
            type="displayname"
            placeholder="닉네임"
            required
            value={createDisplayName}
            onChange={onChangeInputValue}
          />
        </div>
        <input className="create-btn" type="submit" value="생성완료" />
      </form>
    </div>
  );
};

export default Signup;
