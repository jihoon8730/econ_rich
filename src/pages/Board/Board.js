import React from "react";
import "./board.scss";
import { useNavigate } from "react-router-dom";

const Board = ({ boardData }) => {
  const goToPost = useNavigate();
  const goToPostDetail = useNavigate();
  return (
    <div className="Board">
      <div className="board-title">
        <div className="title">♛게시판</div>
        <div
          className="add"
          onClick={() => {
            goToPost("/post");
          }}
        >
          글쓰기
        </div>
      </div>
      {boardData?.map((list) => {
        return (
          <div
            key={list?.id}
            className="board-lists"
            onClick={() => {
              goToPostDetail(`/detail/${list.id}`);
            }}
          >
            <div className="list-title">{list?.postTitle}</div>
            <div className="list-date">test</div>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
