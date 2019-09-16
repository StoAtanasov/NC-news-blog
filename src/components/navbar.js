import React from 'react';
import {Link} from '@reach/router';

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/articles">All Articles</Link>
    </>
  );
}
 
export default NavBar;