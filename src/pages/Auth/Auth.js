import React, { useState } from "react";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import GoogleSignin from "./Google/Google";
import GithubSignin from "./Github/Github";
import "./auth.scss";

const Auth = () => {
  const [isLoginToggle, setIsLoginToggle] = useState(false);
  return (
    <div className="Auth">
      <h3>{isLoginToggle === false ? "로그인" : "회원가입"}</h3>
      {isLoginToggle === true ? (
        <Signup setIsLoginToggle={setIsLoginToggle} />
      ) : (
        <Signin />
      )}
      <p
        className="create-user"
        onClick={() => {
          setIsLoginToggle(!isLoginToggle);
        }}
      >
        {isLoginToggle === true ? "돌아가기" : "회원가입"}
      </p>
      <GoogleSignin />
      <GithubSignin />
    </div>
  );
};
export default Auth;
