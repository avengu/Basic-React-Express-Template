import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Webpack</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

// import React from "react";
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from "./NavbarElements";

// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <Bars />

//         <NavMenu>
//           <NavLink to="/" activeStyles>
//             Home
//           </NavLink>
//           <NavLink to="/about" activeStyles>
//             About
//           </NavLink>
//           <NavLink to="/blog" activeStyles>
//             Blog
//           </NavLink>
//           <NavLink to="/sign-up" activeStyles>
//             Sign Up
//           </NavLink>
//           {/* Second Nav */}
//           {/* <NavBtnLink to="/sign-in"> Sign In</NavBtnLink> */}
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to="/signin">Sign In</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;
