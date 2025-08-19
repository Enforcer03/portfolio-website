import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import KaggleIcon from '../components/Icon/KaggleIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/dp-white-back.jpg';
import heroImage from '../images/gargatua-back.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
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
  title: 'Ved Umrajkar | Resume',
  description: 'Resume of Ved Umrajkar, a student of Mathematics and Computing at IIT Roorkee.',
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
  name: `I'm Ved Umrajkar.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a final year BS-MS student in <strong className="text-stone-100">Mathematics and Computing</strong> at the
        Indian Institute of Technology, Roorkee.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My primary areas of interest are{' '}
        <strong className="text-stone-100">Machine Learning, Computer Vision, and Multimodal Learning</strong>. I have
        hands-on experience in building and deploying ML models through various internships and projects.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf', // Make sure to place your resume PDF in the public/assets folder
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
  description: `A highly motivated and detail-oriented student with a strong foundation in mathematics and computer science. Passionate about leveraging data to solve complex problems and build intelligent systems. Eager to contribute to a challenging and innovative work environment.`,
  aboutItems: [
    {label: 'Location', text: 'Roorkee, Uttarakhand', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon}, // Please update with your correct age
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Machine Learning, Computer Vision', Icon: SparklesIcon},
    {label: 'Study', text: 'Indian Institute of Technology, Roorkee', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'JPMorgan Chase (Upcoming)', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'SQL',
        level: 7,
      },
    ],
  },
  {
    name: 'ML & Data Science Frameworks',
    skills: [
      {
        name: 'PyTorch',
        level: 9,
      },
      {
        name: 'TensorFlow',
        level: 8,
      },
      {
        name: 'Scikit-learn',
        level: 9,
      },
      {
        name: 'Pandas & Numpy',
        level: 10,
      },
    ],
  },
  {
    name: 'Web & Other Technologies',
    skills: [
      {
        name: 'Streamlit',
        level: 8,
      },
      {
        name: 'NLTK',
        level: 7,
      },
      {
        name: 'Starknet-py',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Tree Ring Watermark Detection in Rectified Flow Models',
    description:
      'Conducted analysis of Tree Ring Watermarking performance across DDIM and rectified flow architectures. Presented at ICLR, Singapore.',
    url: '#', // Add a link to your project or publication if available
    image: porfolioImage1,
  },
  {
    title: 'Multi-Modal Person Re-Identification with Video-Text Retrieval',
    description:
      'Developing a novel video-text person re-identification system combining visual embeddings with natural language queries.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'Voice Cloning with AutoRegressive Acoustic Models',
    description:
      'Developed automated voice clones using Tortoise-TTS and built a Streamlit application for real-time generation.',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: 'Performance Analysis of VGG19 and ResNet50 Architectures',
    description:
      'Employed Transfer Learning to classify celebrity faces, concluding that VGG19 outperformed ResNet50 by 11% in accuracy.',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'ForecastPro',
    description: 'Implemented a robust forecasting package by compiling multiple statistical and Deep Learning models.',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'GANs vs Mixture Models for Image Generation',
    description:
      'Developed DCGAN and WGAN models and compared their outputs with Gaussian Mixture Models for image generation.',
    url: '#',
    image: porfolioImage6,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2021 - 2025',
    location: 'Indian Institute of Technology, Roorkee',
    title: 'BS-MS in Mathematics and Computing',
    content: (
      <p>
        Achieved a CGPA of 8.605. Relevant coursework includes Statistical Machine Learning, Natural Language
        Processing, and Design and Analysis of Algorithms.
      </p>
    ),
  },
  {
    date: '2019 - 2021',
    location: 'Late PB Jog Junior College, Pune',
    title: 'Intermediate (Class XII)',
    content: <p>Secured a final percentage of 94.33%.</p>,
  },
  {
    date: '2019',
    location: 'DAV Public School, Pune',
    title: 'Matriculate (Class X)',
    content: <p>Secured a final percentage of 96.20%.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2025 - July 2025 (Upcoming)',
    location: 'JPMorgan Chase',
    title: 'Intern',
    content: <p>Will be working on building macroeconomic models and automating forecasting models.</p>,
  },
  {
    date: 'August 2023 - February 2024',
    location: 'Hashstack Finance',
    title: 'Intern',
    content: (
      <ul>
        <li className="list-disc ml-4">
          Developed a Real-Time Risk Management Framework using Starknet, PostgreSQL, and Streamlit.
        </li>
        <li className="list-disc ml-4">
          Integrated a Mean-Variance Portfolio Optimization model, improving outlier detection by 15%.
        </li>
        <li className="list-disc ml-4">Designed and implemented a comprehensive alert system and growth dashboard.</li>
      </ul>
    ),
  },
  {
    date: 'January 2023 - March 2023',
    location: 'Hloov',
    title: 'Data Science Intern',
    content: (
      <ul>
        <li className="list-disc ml-4">
          Developed a Transfer Learning VGG-19 model in PyTorch to detect cracks in buildings with 99.43% accuracy.
        </li>
        <li className="list-disc ml-4">Used SARIMAX to detect sensor anomalies with 96.7% accuracy.</li>
        <li className="list-disc ml-4">
          Designed a weekly forecasting model using LSTMs for electromagnetic sensor data.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 * This section is a placeholder. Replace with your own testimonials.
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me for any opportunities or collaborations.',
  items: [
    {
      type: ContactType.Email,
      text: 'v_umrajkar@ma.iitr.ac.in',
      href: 'mailto:v_umrajkar@ma.iitr.ac.in',
    },
    {
      type: ContactType.Location,
      text: 'Roorkee, Uttarakhand, India',
      href: 'https://www.google.com/maps/place/Roorkee,+Uttarakhand',
    },
    {
      type: ContactType.Github,
      text: 'ved-umrajkar', // Please update with your actual GitHub username
      href: 'https://github.com/ved-umrajkar', // Please update with your actual GitHub link
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Enforcer03'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ved-umrajkar/'},
  {label: 'Kaggle', Icon: KaggleIcon, href: 'https://www.kaggle.com/vedumrajkar'},
];
