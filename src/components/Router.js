import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Nav from "./Nav/Nav";
import Auth from "../pages/Auth/Auth";
import Board from "../pages/Board/Board";
import Boardpost from "../pages/Boardpost/Boardpost";

const AppRouter = ({ userObj }) => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main userObj={userObj} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/board" element={<Board />} />
        <Route path="/boardpost" element={<Boardpost userObj={userObj} />} />
      </Routes>
    </>
  );
};

export default AppRouter;
