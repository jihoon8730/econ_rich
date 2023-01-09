import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./boardpost.scss";

const Boardpost = ({ userObj }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContents, setPostContents] = useState("");

  const goToPostList = useNavigate();

  const contentsReplaceNewline = () => {
    return postContents.replaceAll("<br>", "\r\n");
  };

  const onPostChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "title") {
      setPostTitle(value);
    } else if (name === "contents") {
      setPostContents(value);
    }
  };

  const onPostSubmit = async (event) => {
    event.preventDefault();
    const dt = new Date();
    let postData = {
      createAt: new Date(),
      createId: userObj.uid,
      createDate: `${dt.getFullYear()}. ${dt.getMonth() + 1}. ${dt.getDate()}`,
      postTitle: postTitle,
      postContents: contentsReplaceNewline(),
    };

    const postAddConfirm = window.confirm("글을 등록하시겠습니까?");
    if (postAddConfirm) {
      if (postTitle === "") {
        alert("제목을 입력해 주세요.");
      } else if (postContents === "") {
        alert("본문을 입력해주세요.");
      } else {
        try {
          const addStyleDatabasePush = await addDoc(
            collection(db, "econrich"),
            postData
          );
          goToPostList("/board");
          console.log("docRef Id :", addStyleDatabasePush.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }
  };

  return (
    <div className="Boardpost">
      <div>
        <form onSubmit={onPostSubmit}>
          <div>
            <input
              className="title"
              name="title"
              value={postTitle}
              type="text"
              placeholder="제목"
              maxLength={15}
              onChange={onPostChange}
            />
            <textarea
              className="text-area-contents"
              name="contents"
              value={postContents}
              type="text"
              placeholder="본문을 입력해 주세요."
              maxLength={150}
              onChange={onPostChange}
            />

            <div className="post-add">
              <input className="post-btn" type="submit" value="개시" />
              <buuton
                className="post-btn"
                onClick={() => {
                  goToPostList("/board");
                }}
              >
                돌아가기
              </buuton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Boardpost;
