import React from "react";
import { Link } from "@reach/router";
import { Nav } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
const NavBar = props => {
  const { loggedInUser } = props;
  return (
    <>
      <Nav className="navbar" variant="dark">
        <Nav.Item>
          <Link className="text" to="/">
            <i className="fas fa-home"></i>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="text" to="/articles">
            <i className="far float-left fa-newspaper"></i> Articles
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="text" to="/topics/coding">
            {" "}
            Coding
          </Link>{" "}
        </Nav.Item>
        <Nav.Item>
          <Link className="text" to="/topics/football">
            {" "}
            Football
          </Link>{" "}
        </Nav.Item>
        <Nav.Item>
          <Link className="text" to="/topics/cooking">
            {" "}
            Cooking
          </Link>{" "}
        </Nav.Item>
        <Nav.Item>
          <p className="text">
            {" "}
            <i className="far fa-user"></i> {loggedInUser}
          </p>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavBar;
