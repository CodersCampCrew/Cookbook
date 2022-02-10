import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./container/Header";

const Layout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "min-content 1fr"
      }}
    >
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
