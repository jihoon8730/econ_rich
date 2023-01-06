import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const Router = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
