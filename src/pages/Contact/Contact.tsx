import Card from 'react-bootstrap/Card';
import Title from '../../components/Tittle/Title';
import { Col, Row } from 'react-bootstrap';
import Mode from '../../components/Mode/Mode';
import { contact, socialAccounts } from '../../data/Contact';
import './contact.css';

const Contact = () => {
  return (
    <>
      <section className='py-3'>
        <Title title='Contact' className='' />
        <Mode className='end-0 pe-4' />
        <Row className='w--lg-75 mx-auto'>
          {contact?.map((e, i) => (
            <Col
              xs={12}
              xl={6}
              className={`mb-4 animate__animated animate__zoomIn animate__delay-${i}s`}
              key={i}
            >
              <a href={e.link} className=' text-decoration-none rounded-5'>
                <Card className=' shadow-lg-web rounded-5'>
                  <Card.Body className='bg-light rounded-5 d-flex flex-column align-items-center p-4 p-xl-5'>
                    <div className='icon border-purple border border-2 rounded-circle mb-xl-4'>
                      {e.icon}
                    </div>
                    <div className='d-flex flex-column  mt-3 text-center gap-xl-3 flex-wrap'>
                      <h3 className=' bg-transparent font-text'>{e.title}:</h3>
                      <h3 className=' bg-transparent font-text text-primary'>
                        {e.text}
                      </h3>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </section>
      <div className='pt-5'>
        <Title title='Follow me on' className='' />
        <Row className='w--lg-75 mx-auto'>
          {socialAccounts?.map((e, i) => (
            <Col
              xs={12}
              xl={6}
              className={`mb-4  animate__animated animate__zoomIn animate__delay-${
                i + 2
              }s`}
              key={i}
            >
              <a href={e.link} className=' text-decoration-none rounded-5'>
                <Card className=' shadow-lg-web rounded-5'>
                  <Card.Body className='bg-light rounded-5 d-flex flex-column align-items-center p-5'>
                    <div className='icon border-purple border border-2 rounded-circle mb-xl-4'>
                      {e.icon}
                    </div>
                    <div className='d-flex flex-column  mt-3 text-center gap-xl-3 flex-wrap'>
                      <h3 className=' bg-transparent font-text'>{e.title}</h3>
                      <h3 className=' bg-transparent font-text'>{e.text}</h3>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Contact;
