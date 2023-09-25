import dark from '../../assets/dark.gif';
import light from '../../assets/light.gif';
import { useTheme } from '../../context/ThemeContext';
import './pageNotFound.css';

const PageNotFound = () => {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <section className='text-center my-auto home-height d-flex justify-content-center align-items-center'>
        {isDarkMode ? (
          <img src={dark} className='img-fluid' alt='dark' srcSet={dark} />
        ) : (
          <img src={light} className='img-fluid' alt='dark' srcSet={light} />
        )}
      </section>
    </div>
  );
};

export default PageNotFound;
