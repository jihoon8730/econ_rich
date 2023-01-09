import React, { useState } from "react";
import SimpleSlider from "../../components/Slick/Slick";
import "./main.scss";
import { useNavigate } from "react-router-dom";

const Main = ({ userObj }) => {
  const [] = useState();
  const goToLogin = useNavigate();
  const goToBoard = useNavigate();
  const goToProfile = useNavigate();
  console.log(userObj);
  return (
    <>
      <main className="Main">
        <aside className="slick-container">
          <SimpleSlider />
        </aside>
        <aside className="menus">
          <div>
            <button
              className="menu"
              onClick={() => {
                goToProfile("/profile");
              }}
            >
              P
            </button>
            <p>프로필</p>
          </div>
          <div>
            <button
              className="menu"
              onClick={(e) => {
                if (userObj) {
                  alert("이미 로그인되어 있습니다");
                  e.preventDefault();
                } else {
                  goToLogin("/auth");
                }
              }}
            >
              L
            </button>
            <p>로그인</p>
          </div>
          <div>
            <button
              className="menu"
              onClick={() => {
                goToBoard("board");
              }}
            >
              B
            </button>
            <p>게시판</p>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Main;
