import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Header2 from "./Header2";

const Main = () => {
  return (
    <Fragment>
      <Header2></Header2>

      <Outlet></Outlet>
    </Fragment>
  );
};

export default Main;
