import React from "react";
import "./board.scss";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const goToPost = useNavigate();
  return (
    <div className="Board">
      <div className="board-title">
        <div className="title">♛게시판</div>
        <div
          className="add"
          onClick={() => {
            goToPost("/boardpost");
          }}
        >
          글쓰기
        </div>
      </div>
      <div className="board-lists">
        <div className="list-title">제목 불라불라 좀 길게</div>
        <div className="list-date">2023.01.07</div>
      </div>
      <div className="board-lists">
        <div className="list-title">제목 불라불라 좀 길게</div>
        <div className="list-date">2023.01.07</div>
      </div>
      <div className="board-lists">
        <div className="list-title">제목 불라불라 좀 길게</div>
        <div className="list-date">2023.01.07</div>
      </div>
    </div>
  );
};

export default Board;
