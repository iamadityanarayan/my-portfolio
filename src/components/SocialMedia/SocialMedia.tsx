import Stack from 'react-bootstrap/Stack';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import './socialMedia.css';
const SocialMedia = () => {
  return (
    <Stack
      direction='horizontal'
      className=' justify-content-evenly align-items-center py-3 flex-wrap'
      gap={3}
    >
      <a rel='noopener' href='https://in.linkedin.com/in/adityanarayan-tiwari-b2b215101' target='_blank' className='p-2 linkedIn'>
        <BsLinkedin className='fs-1 ' />
      </a>
      <a
        rel='noopener'
        href='https://github.com/iamadityanarayan'
        target='_blank'
        className='p-2 '
      >
        <BsGithub className='fs-1 github' />
      </a>
      <a rel='noopener' href='mailto:tiwariadityanarayan@outlook.com' target='_blank' className='p-2 '>
        <MdEmail className='fs-1 outlook' />
      </a>
      <a rel='noopener' href='tel:+919425953556' target='_blank' className='p-2 '>
        <FaPhoneAlt className='fs-1 phone' />
      </a>
    </Stack>
  );
};

export default SocialMedia;
