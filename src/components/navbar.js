import React from "react";
import { Link } from "@reach/router";

const NavBar = props => {
  const { loggedInUser } = props;
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles"> All articles</Link>
      <Link to="/topics/coding"> Coding</Link>
      <Link to="/topics/football"> Football</Link>
      <Link to="/topics/cooking"> Cooking</Link>
      <p>Logged in as: {loggedInUser}</p>
    </nav>
  );
};

export default NavBar;
