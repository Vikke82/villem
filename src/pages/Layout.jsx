import React from "react";
import { Outlet } from "react-router-dom";
import NavBa from "../NavBa";

const Layout = () => {
  return (
    <>
      {" "}
      <NavBa /> <Outlet />{" "}
    </>
  );
};
export default Layout;
