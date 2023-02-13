import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginModal from "./auth/LoginModal";
import RegisterModal from "./auth/RegisterModal";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

function AppNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const logoutt = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const authLinks = (
    <>
      <NavItem>
        <Link to="/dashboard">
          <span className="navbar-text mr-3">
            <strong></strong>
          </span>
        </Link>
      </NavItem>
      <NavLink href="#" onClick={logoutt}>
        Logout
      </NavLink>
    </>
  );

  const guestLinks = (
    <>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </>
  );
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {user ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavBar;
