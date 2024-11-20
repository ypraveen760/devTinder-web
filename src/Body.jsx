import React from "react";
import NavBar from "./component/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
