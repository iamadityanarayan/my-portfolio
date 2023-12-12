import {
  SiBootstrap,
  SiTypescript,
  SiAngular,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiTailwindcss,
  SiJirasoftware,
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

const materialUI = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='30'
    height='32'
    viewBox='0 0 36 32'
    fill='none'
    className='css-1170n61'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z'
      fill='#007FFF'
    ></path>
  </svg>
);

type SkillData = {
  name: string;
  icon?: JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  svg?: any; // @typescript-eslint/no-explicit-any
  color?: string;
  str?: string;
};

export const frontend: SkillData[] = [
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
    name: 'Typescript',
    icon: <SiTypescript className='fs-1 typescript' />,
  },

  {
    name: 'React JS',
    icon: <FaReact className='fs-1 react' />,
  },
  {
    name: 'Context API',
    icon: <FaReact className='fs-1 react' />,
  },
  {
    name: 'Hooks',
    icon: <FaReact className='fs-1 react' />,
  },
  {
    name: 'Zustand',
    str: '🐻',
  },
  {
    name: 'Redux',
    icon: <SiRedux className='fs-1 redux' />,
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap className='fs-1 bootstrap' />,
  },
  {
    name: 'React-Bootstrap',
    icon: <FaReact className='fs-1 react' />,
  },
  {
    name: 'Material UI',
    svg: materialUI,
  },
  {
    name: 'tailwindcss',
    icon: <SiTailwindcss className='fs-1 tailwindcss' />,
  },
  {
    name: 'jQuery',
    icon: <BiLogoJquery className='fs-1 jquery' />,
  },
  {
    name: 'Angular 16',
    icon: <SiAngular className='fs-1 angular' />,
  },
];
export const backend: SkillData[] = [
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
];
export const tools: SkillData[] = [
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
    name: 'Jira Software',
    icon: <SiJirasoftware className='fs-1 tailwindcss' />,
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

