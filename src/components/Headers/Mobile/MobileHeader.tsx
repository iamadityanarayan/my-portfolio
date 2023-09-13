import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './mobileHeader.css';
import { useTheme } from '../../../context/ThemeContext';

const MobileHeader = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className='mobile-header d-lg-none'>
      <Container className='bg-white rounded-top-5'>
        <Navbar
          fixed='bottom'
          className='bg-purple shadow-lg-z rounded-top-5 pb-0'
        >
          <Navbar.Collapse id='basic-navbar-nav' className='rounded-top-5'>
            <Nav
              className={`w-100 flex-wrap ${
                isDarkMode ? 'bg-dark' : 'bg-white'
              }   flex-row justify-content-around p-2 py-3 rounded-top-5`}
            >
              <NavLink className={`nav-link ${isDarkMode ? 'text-light': ''}`} to='/'>
                Home
              </NavLink>
              <NavLink className={`nav-link ${isDarkMode ? 'text-light': ''}`} to='/about'>
                About
              </NavLink>
              <NavLink className={`nav-link ${isDarkMode ? 'text-light': ''}`} to='/work'>
                Work
              </NavLink>
              <NavLink className={`nav-link ${isDarkMode ? 'text-light': ''}`} to='/projects'>
                Projects
              </NavLink>
              <NavLink className={`nav-link ${isDarkMode ? 'text-light': ''}`} to='/contact'>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default MobileHeader;
