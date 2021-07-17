import React from 'react';
import {Navbar} from 'react-bootstrap';

const NavBar =() => (
<>
   <Navbar bg="dark" expand="lg" variant="dark"  className="navbar-nav mx-auto">
    <Navbar.Brand style={{textAlign:"center"}} href="#">York GPA calculator</Navbar.Brand>
  </Navbar>
</>
);

export default NavBar;