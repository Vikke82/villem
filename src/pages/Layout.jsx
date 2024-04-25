import React from "react";
import { Outlet } from "react-router-dom";
import NavBa from "../NavBa";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      {" "}
      <NavBa /> <Outlet /> <Footer />{" "}
    </>
  );
};
export default Layout;
