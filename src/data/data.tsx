import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
 // CalendarIcon,
 // FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
//import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
//import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
//import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
//import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
//import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
//import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
  title: 'C-Meekins Resume',
  description: "Personal resume site with Tim Baker's react resume template",
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

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm Christina`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Atlanta based <strong className="text-stone-100">DevOps Engineer</strong>, currently exploring the realm
        of<strong className="text-stone-100"> cloud technology</strong> investigating the topics of{' '}
        <i className="text-stone-100">
          {' '}
          development operations, artificial intelligence, machine learning, and networking
        </i>
        .
      </p>
    </>
  ),
  actions: [
    {
      href: '',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
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
  description: `In my free time, you cn catch me enjoying some sunset yoga, hanging out with my dog, or exploring beautiful hiking trails.`,
  aboutItems: [
    {label: 'Location', text: 'Atlanta, GA', Icon: MapIcon},
    {label: 'Interests', text: 'Coding, Yoga, Hiking, Problem Solving', Icon: SparklesIcon},
    {label: 'Study', text: 'Florida A&M University, Clark Atlanta University, Emory University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open to Work', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Proficient',
    skills: [
      {
        name: 'AWS Services',
       // level: 10,
      },
      {
        name: 'Python',
        //level: 4,
      },
      {
        name: 'Spanish',
        //level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        //level: 9,
      },
      {
        name: 'Typescript',
        //level: 7,
      },
      {
        name: 'GraphQL',
        //level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
   //     level: 8,
      },
      {
        name: 'Rust',
     //   level: 5,
      },
      {
        name: 'Golang',
       // level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
    //    level: 9,
      },
      {
        name: 'Flutter',
      //  level: 4,
      },
      {
        name: 'Swift',
      //  level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'The Volunteers',
    description: 'Develop a Scholar-Tutor Matching Website built with Django and hosted on AWS Elastic Beanstalk.',
    url: 'https://github.com/blessedtruth',
    image: porfolioImage1,
  },
  /*  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },*/
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2023',
    location: 'Emory University',
    title: 'Developement Operations Certification',
    content: <p></p>,
  },
  {
    date: 'May 2006',
    location: 'Clark Atlanta University',
    title: 'M.A.T. Secondary Mathematics',
    content: <p></p>,
  },
  {
    date: 'May 2003',
    location: 'Florida A&M University',
    title: 'Mathematical Sciences',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2022 - June 2023',
    location: 'Emory "Fullstack" University',
    title: 'Development Operations Engineer Apprentice',
    content: (
      <p>
        Developed CI/CD pipelines to facilitate proficient Data Flow, Use of AWS Services and Django to create a
        tutor-scholar matching service, Utilize IaC tools (Terraform/CloudFormation), Analysis of complex scenarios for
        identification and troubleshooting, Use of logical reasoning and critical thinking to resolve issues in
        conducting DevOps Functions based on Projects, Attention to detail and precision, and Ability to innovate to
        receive consistent, verified, and improved results.
      </p>
    ),
  },
  {
    date: 'Summer 2018, 2020 - 2023',
    location: 'SMASH, A program of the KAPOR Center',
    title: 'Computer Science Workshop Facilitator',
    content: (
      <p>
        Facilitated both a beginner and an intermediate Python course for 1st and 4th-year scholars. Ensured that
        scholars understood and could manipulate the required or recommended technological tools needed to ensure their
        culminating project's completion and success. Promoted positive, productive, and supportive team-based
        interactions among scholars and staff.
      </p>
    ),
  },
  {
    date: 'January 2014 - May 2023',
    location: 'Dekalb County School System',
    title: 'Mathematics Educator',
    content: (
      <p>
        Instrumental in increasing Academe for the State of Georgia's End Of Course Test scores each year reaching a 96%
        pass rate in 2015. Developed and implemented multiple strategies to enhance and encourage student learning
        during distance learning. Taught AP Computer Science through the use of differentiated strategies and positive
        reinforcement. Served the community through various tutorial programs and reach-out initiatives. Utilized
        assorted technologies in the classroom for both demonstrative and assessment purposes. Recognized as Teacher of
        the Month in 2017, 2018, and 2020.
      </p>
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
      name: 'Kelsey Carnosso',
      text: 'Christina and I worked closely together on the Cardiology unit for Epic ClinDoc. She is an efficient resource for ClinDoc and Ambulatory. Christina has a calm demeanor and approches all situations with a level head. She is willing to learn and learns quickly. Christina was a pleasure to work with and I highly recommend her.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/LCML_Handshake_from_logo.png',
    },
    {
      name: 'Zaha Mustafa',
      text: 'It has been a pleasure being Christina Team Lead at Wake Forest Babtist Medical Center. She presented effective skills throughout the implementation and provided excellent support for the end users in her unit.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Helping_Hands.jpg/675px-Helping_Hands.jpg?20211226090752',
    },
    {
      name: 'Alan Sarbin',
      text: 'I was happy to be working with Christina because she is a very smart lady and caught on to the Epic Ambulatory software very well. I often asked her questions, most of which she could answer right away. When she did not know a "How to" answer she used the test system to try and figure it out, which she usually succeeded in doing. The providers seemed to like Christina as well. She was a good partner and I hope we get a chance to work together again.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2014-365-326_Have_a_Smile_Day_%2815856235002%29.jpg/1200px-2014-365-326_Have_a_Smile_Day_%2815856235002%29.jpg?20170310132125',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Connect with me.',
  description:
    'Feel free to reach out with any opportunities, projects, or questions. I look forward to hearing from you!',
  items: [
    {
      type: ContactType.Email,
      text: 'cjm4jm@gmail.com',
      href: 'mailto:cjm4jm@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Atlanta, GA',
      href: 'https://earth.google.com/web/@33.7677129,-84.42060395,271.19416569a,77300.7668093d,35y,0.00422481h,60t,0r/data=CkoaSBJCCiUweDg4ZjUwNDVkNjk5MzA5OGQ6MHg2NmZlZGUyZjk5MGI2MzBiGV7tzRTf30BAIRzbIbTUGFXAKgdBdGxhbnRhGAIgASgC',
    },
    {
      type: ContactType.LinkedIn,
      text: 'c-meekins',
      href: 'https://www.linkedin.com/in/c-meekins/',
    },
    {
      type: ContactType.Github,
      text: 'blessedtruth',
      href: 'https://github.com/blessedtruth',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/blessedtruth'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/c-meekins/'},
];
