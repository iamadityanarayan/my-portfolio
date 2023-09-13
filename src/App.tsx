import { Container } from 'react-bootstrap';
import MobileHeader from './components/Headers/Mobile/MobileHeader';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Work from './pages/Work/Work';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import WebHeader from './components/Headers/Web/WebHeader';
import Footer from './components/Footer/Footer';
import { useTheme } from './context/ThemeContext';
import { BsSun, BsFillMoonStarsFill } from 'react-icons/bs';
import './App.css';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`${isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`}
    >
      <Container className='min-vh-100'>
        <BrowserRouter>
          <div className={`d-none d-lg-block position-fixed pt-4 top-0 z-3`}>
            <button
              className={`border border-2 border-purple bg-transparent 
              
              rounded-circle p-3`}
              onClick={toggleTheme}
            >
              {/* ${  isDarkMode ? 'bg-purple' : 'bg-purple'}  */}
              {isDarkMode ? (
                <BsSun className='fs-3 fw-bold text-purple' />
              ) : (
                <BsFillMoonStarsFill className='fs-3 text-purple' />
              )}
            </button>
          </div>
          <WebHeader />
          <div className='block-spacer'></div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <div className='block-spacer-2'></div>

          <Footer />
          <MobileHeader />
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
