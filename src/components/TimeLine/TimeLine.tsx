import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { FaCircle } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { useTheme } from '../../context/ThemeContext';

const TimeLine = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className='z-1'>
      <VerticalTimeline animate={false} lineColor={`${isDarkMode ? '#fff' : '#c7a2e0'}`}>
        <VerticalTimelineElement
          className='vertical-timeline-element--work animate__animated animate__zoomIn animate__delay'
          contentStyle={{ background: 'rgb(153, 0, 240)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(153, 0, 240)' }}
          dateClassName={`${!isDarkMode && 'text-dark'}`}
          date='Feb 2022 - Present'
          iconStyle={{ background: 'rgb(153, 0, 240)', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className='vertical-timeline-element-title'>
            Senior Software Engineer
          </h3>
          <h4 className='vertical-timeline-element-subtitle fs-5'>
            Qentelli Solutions Private Ltd
          </h4>
          <h4 className='vertical-timeline-element-subtitle fs-5'>
            Hyderabad, India
          </h4>
          <p className='mb-0 mt-3'>JavaScript development</p>
          <p className='my-0'>
            React.js | Typescript | React-Bootstrap | Material UI | Context API
            | Hooks | Zustand | Angular 12 | Docker | UI Design | Figma
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work animate__animated animate__zoomIn animate__delay-1s'
          contentStyle={{ background: 'rgb(153, 0, 240)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(153, 0, 240)' }}
          date='Nov 2020 - Jan 2022'
          dateClassName={`${!isDarkMode && 'text-dark'}`}
          iconStyle={{ background: 'rgb(153, 0, 240)', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className='vertical-timeline-element-title'>Software Engineer</h3>
          <h4 className='vertical-timeline-element-subtitle fs-5'>
            Java R&D PRIVATE LIMITED
          </h4>
          <h4 className='vertical-timeline-element-subtitle fs-5'>
            Bhopal, India
          </h4>
          <p className='mb-0 mt-3'>JavaScript development</p>
          <p className='my-0'>React.js | React-Bootstrap | Redux | Node.js</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work animate__animated animate__zoomIn animate__delay-2s'
          contentStyle={{ background: 'rgb(153, 0, 240)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(153, 0, 240)' }}
          date='Aug 2019 - Jan 2020'
          dateClassName={`${!isDarkMode && 'text-dark'}`}
          iconStyle={{ background: 'rgb(153, 0, 240)', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className='vertical-timeline-element-title'>
            Software Developer{' '}
          </h3>
          <h4 className='vertical-timeline-element-subtitle fs-5'>
            IOSYS SOFTWARE INDIA PRIVATE LIMITED
          </h4>
          <h4 className='vertical-timeline-element-subtitle fs-5'>
            Bengaluru, India
          </h4>
          <p className='mb-0 mt-3'>UI development</p>
          <p className='my-0'>
            HTML & CSS | JavaScript | jQuery | Animations | HubSpot CMS
          </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className='vertical-timeline-element--work '
          contentStyle={{
            background: 'rgba(45,212,191,.1)',
            color: 'rgb(94 234 212/1)',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgba(45,212,191,.1)' }}
          date='2011 - present'
          iconStyle={{ background: 'rgb(153, 0, 240)', color: '#fff' }}
          icon={<FaCircle />}
        >
          <h3 className='vertical-timeline-element-title'>
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        */}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
