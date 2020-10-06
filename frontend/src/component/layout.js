import React from "react";
import NavBar from "./navbar";

function Layout(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
}

export default Layout;
