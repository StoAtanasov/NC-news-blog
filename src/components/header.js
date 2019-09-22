import React from "react";
import NavBar from "./navbar";

const Header = props => {
  const {loggedInUser} = props;
  return (
    <>
      <NavBar loggedInUser={loggedInUser} />

      <h1 className="headerText">NC news blog</h1>
      
    </>
  );
};

export default Header;
