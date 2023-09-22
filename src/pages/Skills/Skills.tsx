// import { BiLogoHtml5 } from 'react-icons/im';

import Title from '../../components/Tittle/Title';
import { Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './skills.css';

import  { backend, frontend, tools } from '../../data/Skills';

const Skills = () => {
  return (
    <div>
      <Title title='Front-end Skills' />
      <div className='tech-skills py-4'>
        <Row className=''>
          {frontend?.map((s, i) => {
            return (
              <Col
                key={i}
                xs={6}
                md={3}
                className={`up align-items-center justify-content-center my-3`}
                title={s.name}
              >
                <motion.div
                  className={`p-4 rounded-pill d-flex gap-4 align-items-center shadow-lg-web ${s.color}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: 'spring',
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                >
                  {s.icon}
                  {s.str && (<h4 className='m-0 fs-2'>{s.str}</h4>)}
                  {/* // eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {s?.svg && s?.svg()}
                  <span className='icon-font'>{s.name}</span>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </div>

      <Title title='Backend Skills' />
      <div className='tech-skills py-4'>
        <Row className=''>
          {backend?.map((s, i) => {
            return (
              <Col
                key={i}
                xs={6}
                md={3}
                className={`up align-items-center justify-content-center my-3`}
                title={s.name}
              >
                <motion.div
                  className={`p-4 rounded-pill d-flex gap-4 align-items-center shadow-lg-web ${s.color}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: 'spring',
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                >
                  {s.icon}
                  {s.str && (<h4 className='m-0 fs-2'>{s.str}</h4>)}
                  {/* // eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {s?.svg && s?.svg()}
                  <span className='icon-font'>{s.name}</span>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </div>

      <Title title='Tools & Others' />
      <div className='tech-skills py-4'>
        <Row className=''>
          {tools?.map((s, i) => {
            return (
              <Col
                key={i}
                xs={6}
                md={3}
                className={`up align-items-center justify-content-center my-3`}
                title={s.name}
              >
                <motion.div
                  className={`p-4 rounded-pill d-flex gap-4 align-items-center shadow-lg-web ${s.color}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: 'spring',
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                >
                  {s.icon}
                  {s.str && (<h4 className='m-0 fs-2'>{s.str}</h4>)}
                  {/* // eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {s?.svg && s?.svg()}
                  <span className='icon-font'>{s.name}</span>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Skills;
