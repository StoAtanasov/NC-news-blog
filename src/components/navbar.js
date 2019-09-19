import React from "react";
import { Link } from "@reach/router";
import {Form, Navbar, Nav,} from "react-bootstrap";

const NavBar = props => {
  const { loggedInUser } = props;
  return (
    <nav>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className={"logo"}>
          <img
            className={"logoimg"}
            src={`/images/logo.jpg`}
            alt="Link to all coding articles"
          />{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="navbar" to="/">
            Home
          </Link>
          <Link className="navbar" to="/articles">
            {" "}
            Articles
          </Link>
          <Link className="navbar" to="/topics/coding">
            {" "}
            Coding
          </Link>
          <Link className="navbar" to="/topics/football">
            {" "}
            Football
          </Link>
          <Link className="navbar" to="/topics/cooking">
            {" "}
            Cooking
          </Link>
        </Nav>
        <Form inline>Logged in as: {loggedInUser}</Form>
      </Navbar>
    </nav>
  );
};

export default NavBar;
