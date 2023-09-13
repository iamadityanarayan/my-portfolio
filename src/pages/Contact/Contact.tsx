import Card from 'react-bootstrap/Card';
import Title from '../../components/Tittle/Title';
import { Col, Row } from 'react-bootstrap';
import { BsHeadset, BsInstagram, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { GrLinkedin } from 'react-icons/gr';
import './contact.css';
import Mode from '../../components/Mode/Mode';

const Contact = () => {
  return (
    <>
      <section className='py-3'>
        <Title title='Contact' className='' />
        <Mode className='end-0 pe-4' />
        <Row className='w--lg-75 mx-auto'>
          <Col xs={12} md={4} className='mb-5'>
            <a
              href='tel:+919425953556'
              className=' text-decoration-none rounded-5'
            >
              <Card className=' shadow-lg-web rounded-5'>
                <Card.Body className='bg-light rounded-5 d-flex justify-content-around align-items-center py-4'>
                  <div className='icon border-purple border border-2 rounded-circle d-flex justify-content-center align-content-center'>
                    <BsHeadset className='fs-1 m-4' />
                  </div>
                  <h3 className=' bg-transparent text-'>Official Phone</h3>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={4} className=''>
            <a
              href='mailto:tiwariadityanarayan@outlook.com'
              className=' text-decoration-none rounded-5'
            >
              <Card className=' shadow-lg-web rounded-5'>
                <Card.Body className='bg-light rounded-5 d-flex justify-content-around align-items-center py-4 '>
                  <div className='icon border-purple border border-2 rounded-circle d-flex justify-content-center align-content-center'>
                    <MdEmail className='fs-1 m-4' />
                  </div>
                  <h3 className=' bg-transparent text-'>Official Mail</h3>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </section>
      <div className='pt-5'>
        <Title title='Follow me on' className="" />
        <Row className='w--lg-75 mx-auto'>
          <Col xs={12} md={4} className='mb-5'>
            <a
              href='https://in.linkedin.com/in/adityanarayan-tiwari-b2b215101'
              target='_blank'
              rel='noopener'
              className=' text-decoration-none rounded-5'
            >
              <Card className=' shadow-lg-web rounded-5'>
                <Card.Body className='bg-light rounded-5 d-flex justify-content-around align-items-center py-4'>
                  <div className='icon border-purple border border-2 rounded-circle d-flex justify-content-center align-content-center'>
                    <GrLinkedin className='fs-1 m-4' />
                  </div>
                  <h3 className=' bg-transparent text-'>LinkedIn</h3>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={4} className='mb-5'>
            <a
              href='https://github.com/iamadityanarayan'
              target='_blank'
              rel='noopener'
              className=' text-decoration-none rounded-5'
            >
              <Card className=' shadow-lg-web rounded-5'>
                <Card.Body className='bg-light rounded-5 d-flex justify-content-around align-items-center py-4'>
                  <div className='icon border-purple border border-2 rounded-circle d-flex justify-content-center align-content-center'>
                    <BsGithub className='fs-1 m-4' />
                  </div>
                  <h3 className=' bg-transparent text-'>GitHub</h3>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={4} className='mb-'>
            <a
              href='https://instagram.com/adityanarayantiwari_?igshid=OGQ5ZDc2ODk2ZA=='
              target='_blank'
              rel='noopener'
              className=' text-decoration-none rounded-5'
            >
              <Card className=' shadow-lg-web rounded-5'>
                <Card.Body className='bg-light rounded-5 d-flex justify-content-around align-items-center py-4'>
                  <div className='icon border-purple border border-2 rounded-circle d-flex justify-content-center align-content-center'>
                    <BsInstagram className='fs-1 m-4' />
                  </div>
                  <h3 className=' bg-transparent text-'>Instagram</h3>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
