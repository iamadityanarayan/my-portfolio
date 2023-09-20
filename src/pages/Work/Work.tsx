import { Badge } from 'react-bootstrap';
import { MdLocationOn } from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa';
import Title from '../../components/Tittle/Title';
import './work.css';

import data from '../../data/workExperience';
import Mode from '../../components/Mode/Mode';
import { useTheme } from '../../context/ThemeContext';
import TimeLine from '../../components/TimeLine/TimeLine';

const Work = () => {
  const { isDarkMode } = useTheme();
  const y = data;
  const reversedArray = [];
  for (let index = y.length - 1; index >= 0; index--) {
    const element = y[index];
    reversedArray.push(element);
  }
  return (
    <section className='work-experience pt-3'>
      <div>
        <Title title='Work Experience' />
        <Mode className='end-0 pe-4' />
        {reversedArray?.map((item, index) => (
          <div
            key={index}
            className={`section-work-experience ${
              reversedArray.length - 1 !== index
                ? 'border-purple border-bottom'
                : ''
            } mb-4`}
          >
            <div className='we-header d-flex justify-content-between align-items-center'>
              <h4 className='job-title'>{item.jobTitle}</h4>
              {/* <Badge pill bg='success'> */}
              <Badge
                pill
                className='px-xxl-3 py-xxl-2'
                bg={`${item.jobTypeColor ? item.jobTypeColor : 'secondary'} `}
              >
                {item.jobType}
              </Badge>
            </div>
            <div className='sub-descriptions d-flex justify-content-between'>
              <div className='job-info d-flex flex-column flex-lg-row gap-2'>
                <div className='d-flex justify-content-start align-items-center gap-2'>
                  <FaBuilding className='fs-4 fst-italic' />
                  <span className='fst-italic text-green'>
                    {item.companyName}
                  </span>
                </div>
                <div className='d-flex justify-content-start align-items-center gap-2'>
                  <MdLocationOn className='fs-4 text-danger' />
                  <span className='fst-italic text-green'>
                    {item.location}
                  </span>
                </div>
              </div>
              <div className='job-duration'>{item.duration}</div>
            </div>
            <div className='project-description pt-3 pb-3'>
              <p className='p-des'>{item.projectDescription}</p>
              <div className='tech-tags d-flex gap-3 flex-wrap'>
                {item?.techTags.map((e, i) => (
                  <Badge
                    className={`px-lg-3 py-lg-2 ${isDarkMode ? 'bgz' : ''}`}
                    key={i}
                    pill
                  >
                    {e}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <TimeLine />
    </section>
  );
};

export default Work;
