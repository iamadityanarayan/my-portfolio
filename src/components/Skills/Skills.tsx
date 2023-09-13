// import { BiLogoHtml5 } from 'react-icons/im';

import Title from '../Tittle/Title';
import { Col, Row } from 'react-bootstrap';

import './skills.css';

import skillsData from '../../data/Skills';

const Skills = () => {
  return (
    <div>
      <Title title='Tech Skills' />
      <div className='tech-skills py-4'>
        <Row className=''>
          {skillsData?.map((s, i) => {
            return (
              <Col
                key={i}
                xs={6}
                md={3}
                className={`up align-items-center justify-content-center my-3`}
                title={s.name}
              >
                <div className='p-4 rounded-pill d-flex gap-4 align-items-center shadow-lg-web'>
                  {s.icon}
                  {s?.svg && s?.svg()}
                  <span className='icon-font'>{s.name}</span>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Skills;
