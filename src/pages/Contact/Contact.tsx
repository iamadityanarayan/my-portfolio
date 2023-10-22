import Title from '../../components/Tittle/Title';
import { Col, Row } from 'react-bootstrap';
import Mode from '../../components/Mode/Mode';
import { contact, socialAccounts } from '../../data/Contact';
import { useTheme } from '../../context/ThemeContext';
import './contact.css';
import ContactImg from '../../assets/contact/contact.jpg';

const Contact = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <section className='py-3'>
        <Title title='Contact' className=' px-2' />
        <Mode className='end-0 pe-4' />
        <Row className='mb-3'>
          <Col>
            <div className=' rounded-5 p-3 -x-bg'>
              <img
                src={ContactImg}
                className=' img-fluid border-0 rounded-4'
                alt=''
              />
            </div>
          </Col>
        </Row>
        <Row className='w--lg-75 mx-auto justify-content-center'>
          <Col xs={12} lg={6}>
            <Title title={`# Let's talk...`} className='fs-2 px-2' />
            {contact?.map((e, i) => (
              <div key={i}>
                <a
                  href={e.link}
                  className={`a-hover text-decoration-none text-${
                    isDarkMode ? 'light' : 'success'
                  } shadow rounded-3 d-flex flex-row align-items-center gap-4 my-3 flex-wra`}
                >
                  <div className='icon border-purple border border-2 rounded-3 w-max'>
                    {e.icon}
                  </div>
                  <div className='d-flex flex-column flex-wrap text- gap-0 flex-wrap'>
                    <h3
                      className={`bg-transparent mb-0 font-text text-${
                        isDarkMode ? 'light' : 'dark'
                      }`}
                    >
                      {e.title}
                    </h3>
                    <p className='bg-transparent mb-0 font-text text-purple fw-500'>
                      {e.text}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </Col>

          <Col xs={12} lg={6}>
            <Title title={`# Follow me on...`} className='fs-2 px-2' />
            <Row className=' flex-wrap justify-content-start'>
              {socialAccounts?.map((e, i) => (
                <Col key={i} xs={12} lg={6} className=''>
                  <a
                    href={e.link}
                    className={`a-hover text-decoration-none text-${
                      isDarkMode ? 'light' : 'success'
                    } shadow rounded-3 d-flex flex-row align-items-center gap-4 my-3 flex-wra`}
                  >
                    <div className='icon border-purple border border-2 rounded-3 w-max'>
                      {e.icon}
                    </div>
                    <div className='d-flex flex-column flex-wrap text- gap-1 flex-wrap'>
                      <h3
                        className={`bg-transparent mb-0 font-text text-${
                          isDarkMode ? 'light' : 'dark'
                        }`}
                      >
                        {e.title}
                      </h3>
                      <p className='bg-transparent mb-0 font-text text-purple fw-500'>
                        {e.text}
                      </p>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Contact;
