import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Nav from "./Nav/Nav";
import Auth from "../pages/Auth/Auth";
import Board from "../pages/Board/Board";
import Boardpost from "../pages/Boardpost/Boardpost";
import { db } from "../firebase";
import Boarddetail from "../pages/Boarddetail/Boarddetail";

const AppRouter = ({ userObj }) => {
  const [boardData, setBoardData] = useState();

  useEffect(() => {
    const q = query(collection(db, "econrich"), orderBy("createAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const userBoardList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBoardData(userBoardList);
      console.log(userBoardList);
    });
  }, [userObj]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main userObj={userObj} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/board" element={<Board boardData={boardData} />} />
        <Route path="/post" element={<Boardpost userObj={userObj} />} />
        <Route
          path="/detail/:id"
          element={<Boarddetail userObj={userObj} boardData={boardData} />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
