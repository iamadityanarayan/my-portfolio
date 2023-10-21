import { BsInstagram, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { GrLinkedin } from 'react-icons/gr';
import { BiPhoneCall } from 'react-icons/bi';

type ContactTypes = {
  icon: JSX.Element;
  link: string;
  text?: string;
  title: string;
}

export const contact: ContactTypes[] = [
  {
    icon: <BiPhoneCall className='fs-3 m-3' />,
    link: 'tel:+91 9425953556',
    text: '+91 9425953556',
    title: 'Call me',
  },
  {
    icon: <MdEmail className='fs-3 m-3' />,
    link: 'mailto:tiwariadityanarayan@outlook.com',
    text: 'tiwariadityanarayan@outlook.com',
    title: 'Mail me',
  },
];

export const socialAccounts: ContactTypes[] = [
  {
    icon: <GrLinkedin className='fs-3 m-3' />,
    link: `https://in.linkedin.com/in/adityanarayan-tiwari-b2b215101`,
    title: 'LinkedIn',
  },
  {
    icon: <BsGithub className='fs-3 m-3' />,
    link: `https://github.com/iamadityanarayan`,
    title: 'GitHub',
  },
  {
    icon: <BsInstagram className='fs-3 m-3' />,
    link: `https://instagram.com/adityanarayantiwari_?igshid=OGQ5ZDc2ODk2ZA==`,
    title: 'Instagram',
  },
];

