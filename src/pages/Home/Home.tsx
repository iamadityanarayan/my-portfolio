import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './home.css';

import Image from '../../assets/vid1.gif';
import Mode from '../../components/Mode/Mode';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
  const naviagte = useNavigate();
  const toProjects = () => naviagte('/projects');
  const toContacts = () => naviagte('/contact');
  const {isDarkMode} = useTheme()
  return (
    <section className='home'>
      <Mode className='ps-2' />
      <Row className='home-height py-xxl-5  '>
        <Col
          xs={12}
          lg={5}
          xxl={5}
          className='box pt-5 pt-lg-0 ms-auto my-lg-auto animate__animated animate__zoomIn animate__delay-1s'
        >
          <div className='box-container p-3 rs-w border-purple border border-6 rounded-circle '>
            <img
              className='img-fluid rounded-circle zoom home-img'
              src={Image}
              alt=''
            />
          </div>
        </Col>
        <Col
          xs={12}
          lg={7}
          className='animate__animated animate__zoomIn my-auto'
        >
          <div className='home-content'>
            <h2 className='font-name text-center text-lg-start pt-4'>
              Hi there, <span className='wave'>👋</span>
            </h2>
            <h2 className='font-name text-center text-lg-start pb-2'>
              I'm{' '}
              <span className='text-purple fw-bold'>Adityanarayan Tiwari</span>
            </h2>
            <hr className='d-lg-none' />
            <p className='text-start text-lg-start py-lg-4 font-description'>
              I am a Full Stack developer with expertise in Frontend. I have
              experience in building{' '}
              <strong className='text-blue'>
                scalable, secure and reliable web applications
              </strong>{' '}
              using various frameworks and technologies. I enjoy solving complex
              problems and learning new skills. I am passionate about creating{' '}
              <strong className='text-blue'>high-quality code</strong> that
              follows <strong className='text-blue'>best practices</strong> and
              industry standards. I am always looking for new challenges and
              opportunities to grow as a developer.
            </p>
            <div className='d-flex flex-column flex-lg-row gap-3'>
              <Button
              onClick={toContacts}
                size='lg'
                className='bg-purple fw-bold border-5 border-0 px-5 rounded-pill'
              >
                Hire me
              </Button>
              <Button
                onClick={toProjects}
                size='lg'
                className={`bg-transparent text-${isDarkMode ? 'light' : 'purple'} fw-bold border-5 border-purple px-5 rounded-pill`}
              >
                Explore Projects
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
