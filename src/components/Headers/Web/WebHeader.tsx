import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './webHeader.css';
import { useTheme } from '../../../context/ThemeContext';

const WebHeader = () => {
  const navContent = [
    {
      text: 'Home',
      link: `/`,
    },
    {
      text: 'About',
      link: `/about`,
    },
    {
      text: 'Work',
      link: `/work`,
    },
    {
      text: 'Skills',
      link: `/skills`,
    },
    {
      text: 'Project',
      link: `/projects`,
    },
    {
      text: 'Contact',
      link: `/contact`,
    },
  ];
  const { isDarkMode } = useTheme();
  return (
    <div className='web-header d-none d-lg-block'>
      <Navbar
        fixed='top'
        className='bg-purple-1 glass- width-40 mt-4 mx-auto shadow-lg rounded-pill p-0'
      >
        <Nav className='w-100 flex-wrap bg-white-1 glass-1 flex-row justify-content-between rounded-pill p-2'>
          {navContent?.map((e, i) => (
            <NavLink key={i}
              className={`nav-link py-75 px-22 ${isDarkMode && 'text-light'}`}
              to={e.link}
            >
              {e.text}
            </NavLink>
          ))}

        
        </Nav>
      </Navbar>
    </div>
  );
};

export default WebHeader;
