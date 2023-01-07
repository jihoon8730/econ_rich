import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./boardpost.scss";

const Boardpost = ({ userObj }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContents, setPostContents] = useState("");

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

    let postData = {
      createAt: new Date(),
      createId: userObj.uid,
    };

    try {
      const addStyleDatabasePush = await addDoc(
        collection(db, "econrich"),
        postData
      );
      console.log("docRef Id :", addStyleDatabasePush.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="Boardpost">
      <div>
        <form onSubmit={onPostSubmit}>
          <div>
            <input
              name="title"
              type="text"
              placeholder="제목"
              maxLength={15}
              onChange={onPostChange}
            />
            <input
              name="contents"
              type="text"
              placeholder="본문을 입력해 주세요."
              maxLength={100}
              onChange={onPostChange}
            />
          </div>

          <input type="submit" value="등록" />
        </form>
      </div>
    </div>
  );
};

export default Boardpost;
