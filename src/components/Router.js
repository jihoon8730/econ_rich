import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Nav from "./Nav/Nav";
import Auth from "../pages/Auth/Auth";
import Board from "../pages/Board/Board";

const AppRouter = ({ userObj }) => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main userObj={userObj} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </>
  );
};

export default AppRouter;
