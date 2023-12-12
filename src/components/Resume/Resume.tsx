import { useTheme } from '../../context/ThemeContext';
import RESUME_PDF from './resume.pdf';

const Resume = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`text-center mt-5`}>
      <a
        href={RESUME_PDF}
        download='Adityanarayan Tiwari.pdf'
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-transparent fw-bold border-5 btn btn-lg border-purple ${isDarkMode ? 'text-white' : 'text-purple'
          } px-5 rounded-pill`}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
