import PortfolioImage1 from '../assets/projects/Portfolio-v1.png';
import PortfolioImageLight2 from '../assets/projects/Portfolio-v2-light.png';
import PortfolioImageDark2 from '../assets/projects/Portfolio-v2-dark.png';
import MuraliPortfolioImage from '../assets/projects/Murali Krishna Portfolio.png';
import BudgetCalculator from '../assets/projects/Budget Calculator.png';
import ImageGallery from '../assets/projects/Image gallery.png';
import Ecommerce from '../assets/projects/ecommerce.png';
import OnlineWorkExperienceCalculator from '../assets/projects/Online-work-experience-calculator.png';
import Todo from '../assets/projects/React Todo App.png';
import { ProjectsDataTypes } from '../types/Project';

const projectsData: ProjectsDataTypes[] = [
  {
    link: `https://experience-calculator-adi.vercel.app`,
    imageTitle: `Online Work Experience Calculator`,
    imageSRC: `${OnlineWorkExperienceCalculator}`
  },
  {
    link: `https://www.muralikrishnaadapa.in/`,
    imageTitle: `Murali Krishna Portfolio`,
    imageSRC: `${MuraliPortfolioImage}`
  },
  {
    link: `https://iamadityanarayan.github.io/image-gallery/`,
    imageTitle: `Image Gallery`,
    imageSRC: `${ImageGallery}`
  },
  {
    link: `https://iamadityanarayan.github.io/budget-app/`,
    imageTitle: `Budget Calculator`,
    imageSRC: `${BudgetCalculator}`
  },
  {
    link: `https://iamadityanarayan.github.io/react-todo-app/`,
    imageTitle: `Todo List`,
    imageSRC: `${Todo}`
  },
  {
    link: `https://ecommerce-website-adi.vercel.app/`,
    imageTitle: `Ecommerce Web App`,
    imageSRC: `${Ecommerce}`
  },
]

const portfoliosData: ProjectsDataTypes[] = [
  {
    link: `https://adityanarayantiwari.vercel.app`,
    imageTitle: `Portfolio v2`,
    imageSRC: `${PortfolioImageLight2}`
  },
  {
    link: `https://iamadityanarayan.github.io/Interactive-Resume/`,
    imageTitle: `Portfolio v1`,
    imageSRC: `${PortfolioImage1}`
  }
]

export { projectsData, portfoliosData }