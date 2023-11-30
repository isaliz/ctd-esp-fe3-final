import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="div-layout">
      <Navbar />
      <div className="layout-outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
