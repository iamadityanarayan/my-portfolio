import { BsSun, BsFillMoonStarsFill } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  className?: string;
};

const Mode = ({ className }: Props) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={`position-fixed d-lg-none pt-4 top-0 z-3 ${className}`}>
      <button
        className={`border border-2 border-purple bg-purple 
         
        rounded-circle p-3`}
        onClick={toggleTheme}
      >
        {/* ${isDarkMode ? 'bg-purple' : 'bg-purple'} */}
        {isDarkMode ? (
          <BsSun className='fs-2 text-light' />
        ) : (
          <BsFillMoonStarsFill className='fs-2 text-light' />
        )}
      </button>
    </div>
  );
};

export default Mode;
