import React from "react";
import Sidebar from "./Sidebar";
import Nav from "./nav";
import RightSide from "./rightSide";

const LayoutContainer = () => {
  return (
    <div className="d-flex flex-row" style={{ height: "100%" }}>
      <Nav/>
      <RightSide />
    </div>
  );
};

export default LayoutContainer;
