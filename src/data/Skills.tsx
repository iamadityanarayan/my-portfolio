import {
  SiBootstrap,
  SiTypescript,
  SiAngular,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostman,
} from 'react-icons/si';
import { FaReact, FaNode, FaGitAlt, FaNpm } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoJquery,
} from 'react-icons/bi';

const figma = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 38 57'
    className='figma-77e5ie'
    aria-label='Homepage'
    width={35}
    height={30}
  >
    <path
      fill='#1abcfe'
      d='M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z'
    ></path>
    <path
      fill='#0acf83'
      d='M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z'
    ></path>
    <path fill='#ff7262' d='M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z'></path>
    <path
      fill='#f24e1e'
      d='M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z'
    ></path>
    <path
      fill='#a259ff'
      d='M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z'
    ></path>
  </svg>
);

type SkillData = {
  name: string;
  icon?: JSX.Element;
  svg?: React.SVGProps<SVGSVGElement> | undefined; 
};

const skillsData: SkillData[] = [
  {
    name: 'HTML',
    icon: <BiLogoHtml5 className='fs-1 html' />,
  },
  {
    name: 'CSS',
    icon: <BiLogoCss3 className='fs-1 css' />,
  },
  {
    name: 'JavaScript',
    icon: <BiLogoJavascript className='fs-1 javascript' />,
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap className='fs-1 bootstrap' />,
  },
  {
    name: 'jQuery',
    icon: <BiLogoJquery className='fs-1 jquery' />,
  },
  {
    name: 'React',
    icon: <FaReact className='fs-1 react' />,
  },
  {
    name: 'Context API',
    icon: <FaReact className='fs-1 react' />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript className='fs-1 typescript' />,
  },
  {
    name: 'Angular 12',
    icon: <SiAngular className='fs-1 angular' />,
  },
  {
    name: 'Node JS',
    icon: <FaNode className='fs-1 node-js' />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className='fs-1 mongo-db' />,
  },
  {
    name: 'Express JS',
    icon: <SiExpress className='fs-1 express-js' />,
  },
  {
    name: 'Redux',
    icon: <SiRedux className='fs-1 redux' />,
  },
  {
    name: 'Git',
    icon: <FaGitAlt className='fs-1 git' />,
  },
  {
    name: 'GitHub',
    icon: <BsGithub className='fs-1 github' />,
  },
  {
    name: 'Postman',
    icon: <SiPostman className='fs-1 postman' />,
  },
  {
    name: 'NPM',
    icon: <FaNpm className='fs-1 npm' />,
  },
  {
    name: 'Figma',
    svg: figma,
  },
];

export default skillsData;
