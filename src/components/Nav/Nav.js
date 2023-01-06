import React from "react";
import "./nav.scss";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const goToHome = useNavigate();

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
    </div>
  );
};

export default Nav;
