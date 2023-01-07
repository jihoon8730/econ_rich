import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./boarddetail.scss";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Boarddetail = ({ boardData, userObj }) => {
  const goToBoard = useNavigate();
  let { id } = useParams();
  let userId = boardData?.find((board) => {
    return board.id === id;
  });

  const onDeleteStyle = () => {
    const isDeleteConfirm = window.confirm("정말로 스타일을 삭제하시겠습니까?");
    const boardDelete = doc(db, "econrich", `${userId?.id}`);
    if (isDeleteConfirm) {
      goToBoard("/board");
      deleteDoc(boardDelete);
    }
  };
  return (
    <>
      <div className="Boarddetail">
        <div className="board-title">{userId?.postTitle}</div>
        <div className="board-contents">{userId?.postContents}</div>
        {userObj.uid === userId.createId ? (
          <div className="board-delete" onClick={onDeleteStyle}>
            삭제
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Boarddetail;
