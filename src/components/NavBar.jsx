import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'

import { navLinks } from "../data/index"
import { NavLink, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../data/useLocalStorage';

const NavBar = () => {
  let navigate = useNavigate();
  const { getItem, clearStorage, initializeItem } = useLocalStorage("User");

  const userData = getItem();
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    }
    else {
      setChangeColor(false);
    }
  }

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (

    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className='fs-3 fw-bold'>MCO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            {userData.userName == null || userData.userName == '' || userData.userName == "" ?
              <div className='text-center'>
                <button className='btn btn-outline-danger rounded-1' onClick={() => navigate("/login")}>Join With Us</button>
              </div> :
              <div className='text-center'>
                <Dropdown className='dropdown-menu-main'>
                  <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    {userData.userName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='dropdown-menu-small'>
                    <Dropdown.Item className='dropdown-menu-small' onClick={() => navigate("/profile")}>Profile</Dropdown.Item>
                    <Dropdown.Item className='dropdown-menu-small' onClick={() => {
                      clearStorage();
                      initializeItem();
                      navigate("/");
                    }}>Log Out</Dropdown.Item>
                    <Dropdown.Item className='dropdown-menu-small' onClick={() => navigate("/topup")}>Top Up</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar