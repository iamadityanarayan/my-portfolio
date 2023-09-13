import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './webHeader.css';

const WebHeader = () => {
  return (
    <div className='web-header d-none d-lg-block'>
      <Navbar
        fixed='top'
        className='bg-purple width-40 mt-4 mx-auto shadow-lg-web rounded-pill p-0'
      >
        <Nav className='w-100 flex-wrap bg-white flex-row justify-content-between rounded-pill p-2'>
          <NavLink className='nav-link py-75 px-22' to='/'>
            Home
          </NavLink>
          <NavLink className='nav-link py-75 px-22' to='/about'>
            About
          </NavLink>
          <NavLink className='nav-link py-75 px-22' to='/work'>
            Work
          </NavLink>
          <NavLink className='nav-link py-75 px-22' to='/projects'>
            Projects
          </NavLink>
          <NavLink className='nav-link py-75 px-22' to='/contact'>
            Contact
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default WebHeader;
