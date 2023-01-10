import React, { useState } from "react";
import SimpleSlider from "../../components/Slick/Slick";
import "./main.scss";
import { useNavigate } from "react-router-dom";

const Main = ({ userObj }) => {
  const goToLogin = useNavigate();
  const goToBoard = useNavigate();
  const goToProfile = useNavigate();

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
                if (userObj) {
                  goToProfile("/profile");
                } else {
                  alert("로그인이 필요한 서비스 입니다.");
                }
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
              C
            </button>
            <p>게시판</p>
          </div>
        </aside>
        <aside className="menus-two">
          <div>
            <a href="https://github.com/jihoon8730" target="_blank">
              <button className="menu">G</button>
            </a>
            <p>깃허브</p>
          </div>
          <div>
            <a href="https://rec8730.tistory.com/" target="_blank">
              <button className="menu">B</button>
            </a>
            <p>블로그</p>
          </div>
          <div>
            <a href="https://www.instagram.com/0112mm_nin/" target="_blank">
              <button className="menu">S</button>
            </a>
            <p>SNS</p>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Main;
