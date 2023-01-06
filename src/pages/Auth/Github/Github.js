import React from "react";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { authService } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import "./github.scss";

const GithubSignin = () => {
  const goToAuth = useNavigate();

  const onSocialLoginClick = (e) => {
    const {
      target: { name },
    } = e;
    if (name === "github") {
      const provider = new GithubAuthProvider();
      signInWithPopup(authService, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          goToAuth("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  return (
    <div>
      <button className="github-btn" name="github" onClick={onSocialLoginClick}>
        Github 로그인
      </button>
    </div>
  );
};

export default GithubSignin;
