import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './mobileHeader.css';


const MobileHeader = () => {
  const { isDarkMode } = useTheme();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='mobile-header menu-bottom d-lg-none z-3 position-fixed bottom-0'>
      <Container className='bg-white rounded-top-5'>
        <Navbar
          fixed='bottom'
          className='bg-purple shadow-lg-z  rounded-top-5 pb-0'
        >
          <Navbar.Collapse id='basic-navbar-nav' className='rounded-top-5'>
            <Nav
              className={`w-100 flex-wrap ${isDarkMode ? 'bg-dark' : 'bg-white'
                }   flex-row justify-content-around p-2 py-3 rounded-top-5`}
            >
              <NavLink className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light' : ''}`} to='/'>
                Home
              </NavLink>
              <NavLink className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light' : ''}`} to='/about'>
                About
              </NavLink>
              <NavLink className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light' : ''}`} to='/work'>
                Work
              </NavLink>
              {/* <NavLink className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light': ''}`} to='/skills'>
                Skills
              </NavLink>
              <NavLink className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light': ''}`} to='/projects'>
                Projects
              </NavLink>
              <NavLink className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light': ''}`} to='/contact'>
                Contact
              </NavLink> */}
              <Button className={`bg-transparent border-0 shadow-none mobile-nav-link-font ${isDarkMode ? 'text-light' : 'text-dark'}`} variant="primary" onClick={handleShow}>
                More
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Offcanvas show={show} onHide={handleClose} placement='bottom'>
        <Offcanvas.Body className={` mobile-header ${isDarkMode ? 'bg-dark' : 'bg-white'
          }  `}>
          <Navbar>
            <Navbar.Collapse id='basic-navbar-nav' className='rounded-top-5'>
              <Nav
                className={`w-100 flex-wrap ${isDarkMode ? 'bg-dark' : 'bg-white'
                  }   flex-column justify-content-around p-2 py-3 rounded-top-5`}
              >
                <NavLink onClick={handleClose} className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light' : ''}`} to='/'>
                  Home
                </NavLink>
                <NavLink onClick={handleClose} className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light' : ''}`} to='/about'>
                  About
                </NavLink>
                <NavLink onClick={handleClose} className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light' : ''}`} to='/work'>
                  Work
                </NavLink>
                <NavLink onClick={handleClose} className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light' : ''}`} to='/skills'>
                  Skills
                </NavLink>
                <NavLink onClick={handleClose} className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light' : ''}`} to='/projects'>
                  Projects
                </NavLink>
                <NavLink onClick={handleClose} className={`nav-link mobile-nav-link-font ${isDarkMode ? 'text-light' : ''}`} to='/contact'>
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MobileHeader;
