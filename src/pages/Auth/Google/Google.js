import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authService } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import "./google.scss";

const GoogleSignin = () => {
  const goToAuth = useNavigate();

  const onSocialLoginClick = (e) => {
    const {
      target: { name },
    } = e;
    if (name === "google") {
      const provider = new GoogleAuthProvider();
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
      <button className="google-btn" name="google" onClick={onSocialLoginClick}>
        Google 로그인
      </button>
    </div>
  );
};

export default GoogleSignin;
