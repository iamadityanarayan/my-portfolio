import Mode from '../../components/Mode/Mode';
import Skills from '../../components/Skills/Skills';
import Title from '../../components/Tittle/Title';
import './about.css';

const About = () => {
  return (
    <>
    
    <section className='about-work pb-5 pt-4'>
      {/* About Section */}
      <div>
          <Title title='About' className='' />
          <Mode className='end-0 pe-4' />
        {/* <p className="para1 text-center font-description">.</p> */}
        <p className='para2 text-start fs-6'>
          I’m Adityanarayan T. I live in India, where I design the future. I've
          worked on a variety of projects over the years and I'm proud of the
          progress I've made. Many of these projects are open-source and
          available for others to explore and contribute to. If you're
          interested in any of the projects I've worked on, please feel free to
          check out the code and suggest any improvements or enhancements you
          might have in mind. Collaborating with others is a great way to learn
          and grow, and I'm always open to new ideas and feedback.
        </p>
      </div>
      {/* Work Section */}
   
    </section>
    <Skills />
    </>
  );
};

export default About;
