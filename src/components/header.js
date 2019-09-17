import React from "react";
import NavBar from "./navbar";

const Header = props => {
  return (
    <>
      <NavBar loggedInUser={ props.loggedInUser } />
      <h1>NC news blog</h1>
    </>
  );
};

export default Header;
