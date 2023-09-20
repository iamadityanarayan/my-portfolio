import Mode from '../../components/Mode/Mode';
import Skills from '../../components/Skills/Skills';
import Title from '../../components/Tittle/Title';
import { aboutData } from '../../data/About';
import './about.css';

const About = () => {
  return (
    <>
      <section className='about-work pb-5 pt-4'>
        <div>
          <Title title='About' className='' />
          <Mode className='end-0 pe-4' />
          {aboutData?.des.map((e, i) => (
            <p
              className={`para2 text-start mb-3 animate__animated animate__zoomIn animate__delay-${
                i
              }s`}
              key={i}
            >
              {e}
            </p>
          ))}
        </div>
      </section>
      <Skills />
    </>
  );
};

export default About;
