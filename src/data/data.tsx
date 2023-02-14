import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Nauman Yawar Butt Resume Site',
  description: "Site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Nauman Yawar Butt.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Master of Cybersecurity</strong> student at the <strong className="text-stone-100">University of Adelaide</strong>, currently looking for 
        internships in <strong className="text-stone-100">Cybersecurity, Software Engineering and Technology Consultancy</strong> to help make the world safer and more technologically advanced.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me <strong className="text-stone-100">meeting new people</strong>,
        playing <strong className="text-stone-100">badminton</strong>, or exploring the beautiful beaches of{' '}
        <strong className="text-stone-100">South Australia</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'assets/Nauman Yawar Butt Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have plenty experience in giving and organizing design thinking workshops, coaching university first-years and developing React.JS websites. I am a fun loving, easy going guy who loves writing and telling jokes.`,
  aboutItems: [
    {label: 'Location', text: 'Adelaide, SA', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Pakistani - Can work full-time in summers and part-time year-round', Icon: FlagIcon},
    {label: 'Interests', text: 'Networking, RPG Gaming, Comedy', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Adelaide', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Looking for work', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Urdu',
        level: 8,
      },
      // {
      //   name: 'Spanish',
      //   level: 3,
      // },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Javascript',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'Python',
        level: 6,
      },
      // {
      //   name: 'Golang',
      //   level: 4,
      // },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 6,
      },
      {
        name: 'Flutter',
        level: 7,
      },
      // {
      //   name: 'Swift',
      //   level: 3,
      // },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Science Bowl Portable',
    description: 'Flutter Android app: A portable version of the Science Bowl competition. Multiplayer enabled!',
    url: 'https://github.com/NomiPeaceMaker/Science_Bowl_Portable',
    image: porfolioImage1,
  },
  {
    title: 'Distributed Hash Tables',
    description: 'Distributed data encryption and storage in separate file systems.',
    url: 'https://github.com/NomiPeaceMaker/DHT-NetCen',
    image: porfolioImage2,
  },
  {
    title: 'Stack Overflow Big Data Analysis',
    description: 'Analysis of Stack Overflow data available on Google BigQuery platform.',
    url: 'https://github.com/NomiPeaceMaker/StackOverflowAnalysis4Queens',
    image: porfolioImage3,
  },
  {
    title: 'Nauman Website 2.0',
    description: 'Source Code for this Site! (We don`t talk about 1.0 :P)',
    url: 'https://github.com/NomiPeaceMaker/naumanSite2.0',
    image: porfolioImage4,
  },
  {
    title: 'PsychSearch',
    description: 'Databases Project to develop an application to store, rank, rate and review all mental health services in Pakistan',
    url: 'https://github.com/uzair110/Psych-help',
    image: porfolioImage5,
  },
  {
    title: 'There She Goes',
    description: 'User Research -> High Fidelity Application Design to help women mobility issues in Pakistan.',
    url: 'https://docs.google.com/presentation/d/1BRDUTyCNdSU9jXlNoV5xEqkLQIo5VNXb/edit?usp=sharing&ouid=107484080057686343920&rtpof=true&sd=true',
    image: porfolioImage6,
  },
  {
    title: 'Designing for Change',
    description: 'Design Thinking and Prototyping Workshop. Implemented Design Thinking principles to empathise and brainstorm to find solutions for the problems faced by the Pakistan Society for the Differently-Abled.',
    url: 'https://medium.com/@naumanyawarbutt/pakistan-society-for-the-rehabilitation-of-the-differently-abled-df27cbc795ee?sk=041bfec652a2a93538c047fd751ad7aa',
    image: porfolioImage7,
  },
  {
    title: 'New York Property Price Predictor',
    description: 'Data Analysis and Presentation of properties in New York.',
    url: 'https://medium.com/@naumanyawarbutt/new-york-property-sales-part-1-cea5433bc2b8?sk=f396be1c2f06a54b016e714b66327d5d',
    image: porfolioImage8,
  },
  {
    title: 'Disaster Response System',
    description: 'Fake News Detection Chatbot using Crowdsourcing, with inteligent Chatbot',
    url: 'https://docs.google.com/presentation/d/12ER_Ml66CVHfXqUuipb8FpCPG0bnLfM2aIm2ZYrhknk/edit?usp=sharing',
    image: porfolioImage9,
  },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'January 2023 - Present',
    location: 'University of Adelaide',
    title: 'Master of Cybersecurity',
    content: <p>Expected Graduation Date November 2024.</p>,
  },
  {
    date: 'September 2017 - July 2021',
    location: 'Lahore University of Management Sciences',
    title: 'B.S. Computer Science (Honours)',
    content: <p>Graduated with Merit. Vice President of INDEX, the Design and Innovation Society of LUMS.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - December 2022',
    location: 'Confiz Limited',
    title: 'Software Engineer',
    content: (
        <ul>
          <li>Engineered solutions using ReactJS and NodeJS on a large sized project</li>
          <li>Mastered SPFx Microsoft Sharepoint for building enterprise reactJS applications</li>
          <li>Singlehandedly completed project discovery for a client project to ensure a smooth project kick-off</li>
        </ul>

    ),
  },
  {
    date: 'August 2020 - January 2021',
    location: 'Lahore University of Management Sciences',
    title: 'Full-time teaching assistant',
    content: (
      <ul>
          <li>Assisted more than 40 Master’s students with the programming of advanced network systems and analyzing routing and forwarding models</li>
          <li>Initiated support sessions to teach students socket programming in C++, improving grades of 23 students by ~46%</li>
          <li>Conducted classes to train students for server-client communication and hosting web-applications</li>
        </ul>
    ),
  },
];


export const volunteer: TimelineItem[] = [
  {
    date: 'September 2017 - July 2021',
    location: 'INDEX - The Design and Innovation Society of LUMS',
    title: 'Member - Assistant Director Promotions - Director Marketing - Vice President',
    content: (
        <ul>
          <li>Led a team of 100 members to educate 500 university students about Design Thinking</li>
          <li>Partnered with Confiz Ltd. to conduct “Redesign LUMS”, a first of its kind design competition in LUMS</li>
          <li>Hosted “Vulcan”, a digital art design competition with a participation of over 300 students from across Pakistan</li>
        </ul>

    ),
  },
  {
    date: 'Aug 2020 - Nov 2020, Aug 2019 - Nov 2019, Aug 2018 - Nov 2018',
    location: 'LUMS Orientation Week',
    title: 'Group Coach',
    content: (
      <p>
        I volunteered to mentor the incoming LUMS batch, which I did by organizing team-building exercises, Sensitivity and Privacy Training sessions and by being the first point of contact for a total of 60 students over three years.
      </p>
    ),
  },
  {
    date: 'December 2019 - April 2020',
    location: 'UX Pakistan 2020',
    title: 'Event Head',
    content: (
      <ul>
          <li>Assisted more than 40 Master’s students with the programming of advanced network systems and analyzing routing and forwarding models</li>
          <li>Initiated support sessions to teach students socket programming in C++, improving grades of 23 students by ~46%</li>
          <li>Conducted classes to train students for server-client communication and hosting web-applications</li>
        </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'M. Saqib Mehboob',
      text: 'I was Nauman’s direct supervisor and a Senior Technical Project Manager at Confiz Limited, Lahore, Pakistan. I have 5 years of experience as a Software Engineer and another 9 years work experience as a Technical Project Manager. Nauman is an independent, self-directed person who is able to communicate effectively and meet even the most demanding challenges. During his 1 year and 6 months’ tenure here, he was a crucial part of our web-app development team and the many sprints we conducted following Agile software development principles. His research and documentation work is clear and concise as well as very insightful for newly on boarded team members.',
      image: 'assets/saqib_mehboob.jfif',
    },
    {
      name: 'Dr Suleman Shahid',
      text: 'Nauman completed his senior year project under my supervision and completed two courses under my tutelage, getting A grades in all these endevours. He was Vice President of INDEX, the innovation and design society, this society is under my patronage. I have observed Nauman grow during his 4 years at LUMS. He has shown strong leadership skills, dedication to his work and solid communication skills among his peers. He will be a good fit for any organisation.',
      image: 'assets/suleman_shahid.jfif',
    },
    {
      name: 'Dr Zartash Afzal Uzmi',
      text: 'Nauman was a Teaching Assistant in a course I taught at LUMS: Principles of Networks. He performed his duties timely, was very helpful and professional with all students. His empathy and kindness made him a favourite among students. Nauman later joined Confiz Limited, one of the largest Software Companies in Pakistan.',
      image: 'assets/zartash_uzmi.jfif',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Hi there, feel free to email me anytime!',
  items: [
    {
      type: ContactType.Email,
      text: 'nbutt29@gmail.com',
      href: 'mailto:nbutt29@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Nauman Yawar Butt on LinkedIn',
      href: 'https://www.linkedin.com/in/nauman-yawar-butt-2a545a146/',
    },
    {
      type: ContactType.Location,
      text: 'Adelaide, SA, Australia',
      href: 'https://goo.gl/maps/NfFAJxrjfXwb2sGK6',
    },
    {
      type: ContactType.Instagram,
      text: '@nomipeacemaker',
      href: 'https://www.instagram.com/nomipeacemaker/',
    },
    {
      type: ContactType.Github,
      text: 'nomipeacemaker',
      href: 'https://github.com/nomipeacemaker',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nomipeacemaker'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/nauman-yawar-butt-2a545a146/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/nomipeacemaker/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/NaumanYawar'},
];
