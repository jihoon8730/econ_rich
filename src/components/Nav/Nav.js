import React from "react";
import "./nav.scss";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Nav = () => {
  const goToHome = useNavigate();
  const goToLogin = useNavigate();

  const onLogoutClick = () => {
    const auth = getAuth();
    const isLogout = window.confirm("로그아웃 하시겠습니까");
    if (isLogout) {
      signOut(auth);
      alert("로그아웃이 완료 되었습니다.");
      goToLogin("/");
      window.location.reload();
    }
  };

  return (
    <div className="Nav">
      <div
        className="Nav-home"
        onClick={() => {
          goToHome("/");
        }}
      >
        Home
      </div>
      <h2>Shin Ji hoon</h2>
      <div className="logout" onClick={onLogoutClick}>
        Logout
      </div>
    </div>
  );
};

export default Nav;
