import React, { useState } from "react";
import SimpleSlider from "../../components/Slick/Slick";
import "./main.scss";

const Main = () => {
  const [] = useState();
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
                console.log("hello");
              }}
            >
              P
            </button>
            <p>프로필</p>
          </div>
          <div>
            <button className="menu">L</button>
            <p>로그인</p>
          </div>
          <div>
            <button className="menu">B</button>
            <p>게시판</p>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Main;
