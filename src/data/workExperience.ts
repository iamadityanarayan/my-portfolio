type WorkExperienceTypes = {
  jobTitle: string;
  jobType: string;
  jobTypeColor?: string;
  companyName: string;
  location: string;
  duration: string;
  projectDescription: string;
  techTags: string[];
}

const work: WorkExperienceTypes[] = [
  {
    jobTitle: 'Software Developer',
    jobType: 'Full Time',
    companyName: "iOSys Software India Pvt. Ltd",
    location: "Bengaluru, India",
    duration: 'Aug 2019 - Jan 2020',
    projectDescription: "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    techTags: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'Hubspot', 'CMS tools']
  },
  {
    jobTitle: 'Software Engineer',
    jobType: 'Full Time',
    companyName: "Java R & D Private Ltd",
    location: "Bhopal, India",
    duration: 'Nov 2020 - Feb 2022',
    projectDescription: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback. Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.",
    techTags: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'React.js', 'Redux', 'React-Bootstrap', 'Node.js']
  },
  {
    jobTitle: 'Senior Software Engineer',
    jobType: 'Full Time',
    jobTypeColor: 'success',
    companyName: "Qentelli Solutions Private Ltd",
    location: "Hyderabad, India",
    duration: 'Feb 2022 - Present',
    projectDescription: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship..",
    techTags: ['React.js', 'Typescript', 'Hooks', 'Context API', 'Zustand', 'React-Bootstrap', 'Material UI', 'Docker', 'Git', 'GitHub']
  },
]

export default work;