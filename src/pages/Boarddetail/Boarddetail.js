import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./boarddetail.scss";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Boarddetail = ({ boardData, userObj }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [newUpdateContents, setNewUpdateContents] = useState();
  const [newUpdateTitle, setNewUpdateTitle] = useState();

  let { id } = useParams();
  let userId = boardData?.find((board) => {
    return board.id === id;
  });
  const goToBoard = useNavigate();

  const toggleUpdate = () => setIsUpdate((prev) => !prev);

  const onSubmit = async (event) => {
    const isUpdateConfirm = window.confirm("정말로 게시글을 수정하시겠습니까?");
    const boardUser = doc(db, "econrich", `${userId?.id}`);
    event.preventDefault();
    if (isUpdateConfirm) {
      await updateDoc(boardUser, {
        postTitle: newUpdateTitle,
        postContents: newUpdateContents,
      });
      setIsUpdate(false);
    }
  };

  const onChangeTitle = (event) => {
    const {
      target: { value },
    } = event;
    setNewUpdateTitle(value);
  };

  const onChangeContents = (event) => {
    const {
      target: { value },
    } = event;
    setNewUpdateContents(value);
  };

  const onDeleteStyle = () => {
    const isDeleteConfirm = window.confirm("게시글을 삭제하시겠습니까?");
    const boardDelete = doc(db, "econrich", `${userId?.id}`);
    if (isDeleteConfirm) {
      goToBoard("/board");
      deleteDoc(boardDelete);
    }
  };

  return (
    <>
      <div className="Boarddetail">
        {isUpdate ? (
          <>
            <form onSubmit={onSubmit}>
              <input
                className="title-input"
                value={newUpdateTitle}
                type="text"
                placeholder="제목을 수정해 주세요"
                maxLength={15}
                onChange={onChangeTitle}
              />
              <textarea
                className="contents-area"
                value={newUpdateContents}
                placeholder="본문을 수정해 주세요."
                required
                onChange={onChangeContents}
                maxLength={150}
              />
              <input className="update" type="submit" value="수정하기" />
            </form>
            <button
              className="delete"
              onClick={() => {
                setIsUpdate(false);
              }}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <div className="board-title">{userId?.postTitle}</div>
            <div className="board-contents">{userId?.postContents}</div>

            {userObj?.uid === userId?.createId ||
            userObj?.uid === "tBmF1Lxv8SZpebuUvNi4UnlRJBG3" ? (
              <>
                <div className="board-delete" onClick={toggleUpdate}>
                  수정
                </div>
                <div className="board-delete" onClick={onDeleteStyle}>
                  삭제
                </div>
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default Boarddetail;
