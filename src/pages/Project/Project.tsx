import Title from '../../components/Tittle/Title';
import { projectsData, portfoliosData } from '../../data/Projects';
import Mode from '../../components/Mode/Mode';
import ProjectsList from './ProjectsList';
import './project.css';

const Project = () => {
  return (
    <section className='project-section py-3'>
      <Title title='Projects & Portfolio' />
      <Mode className='end-0 pe-4' />
      <div className='proejcts-contents'>
        <ProjectsList data={projectsData} />
      </div>

      <Title title="My Portfolio's" />
      <div className='proejcts-contents'>
        <ProjectsList data={portfoliosData} />
      </div>
    </section>
  );
};

export default Project;
