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
import Profile from "../pages/Profile/Profile";
import Footer from "./Footer/Footer";

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
    });
  }, [userObj]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main userObj={userObj} />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/board"
          element={<Board boardData={boardData} userObj={userObj} />}
        />
        <Route path="/post" element={<Boardpost userObj={userObj} />} />
        <Route
          path="/detail/:id"
          element={<Boarddetail userObj={userObj} boardData={boardData} />}
        />
        <Route path="profile" element={<Profile userObj={userObj} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
