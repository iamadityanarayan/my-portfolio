import Title from '../../components/Tittle/Title';
import { projectsData, portfoliosData } from '../../data/Projects';
import Mode from '../../components/Mode/Mode';
import ProjectsList from './ProjectsList';
import './project.css';

const Project = () => {
  return (
    <section className='project-section py-3'>
      <Title title='Projects' />
      <p className='mb-4 fst-italic text-secondary'>Please be aware that organizational projects have not been included in this section.</p>
      <Mode className='end-0 pe-4' />
      <div className='proejcts-contents'>
        <ProjectsList data={projectsData} />
      </div>

      <Title title="My Portfolio's" />
      <div className='proejcts-contents'>
        <ProjectsList data={portfoliosData} n={5} />
      </div>
    </section>
  );
};

export default Project;
