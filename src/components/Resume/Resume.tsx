import { useTheme } from '../../context/ThemeContext';

const ResumeURL = `https://drive.google.com/file/d/1r1XSI5EUuapnXLQq4oTNDI_UW2tQmff8/view`;

const Resume = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`text-center`}>
      <a
        href={ResumeURL}
        target='_blank'
        className={`bg-transparent fw-bold border-5 btn btn-lg mt-4 border-purple ${
          isDarkMode ? 'text-white' : 'text-purple'
        } px-5 rounded-pill`}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
