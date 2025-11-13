import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import profilepic from '../images/dp-white-back.jpg';
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
  HighlightItem,
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
  Highlights: 'highlights',
  Blogs: 'blogs',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Publications: 'publications',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: `I'm Ved Umrajkar.`,
  // interests: ['Machine Learning', 'Computer Vision', 'Applied Statistics', 'Multimodal AI', 'Trustworthy AI'],
  description: (
    <>
      <p className="prose-sm text-neutral-700 dark:text-stone-200 sm:prose-base lg:prose-lg">
        I am a final year BS-MS student in{' '}
        <strong className="text-neutral-900 dark:text-stone-100">Mathematics and Computing</strong> at the
        Indian Institute of Technology, Roorkee.
      </p>
      <p className="prose-sm text-neutral-700 dark:text-stone-200 sm:prose-base lg:prose-lg">
        My primary areas of interest are{' '}
        <strong className="text-neutral-900 dark:text-stone-100">
          Machine Learning, Computer Vision, Applied Statistics, and Multimodal AI
        </strong>
        . I have hands-on experience in building and deploying ML models through various internships and projects.
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
  achievements: [
    'Amazon ML Challenge 2024 — Global Rank 16 among 10k+ teams',
    'Inter-IIT Tech Meet 13.0 — Silver Medal for Dream11 AI Product',
    'Kaggle Expert — Top 1% (Global Rank 1890)',
    'INSPIRE Scholarship awardee by the Government of India',
  ],
  aboutItems: [
    {label: 'Location', text: 'Roorkee, Uttarakhand', Icon: MapIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Machine Learning, Computer Vision', Icon: SparklesIcon},
    {label: 'Study', text: 'Indian Institute of Technology, Roorkee', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'JPMorgan Chase', Icon: BuildingOffice2Icon},
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
      'Conducted analysis of Tree Ring Watermarking performance across DDIM and rectified flow architectures. Presented findings at ICLR, Singapore.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Multi-Modal Person Re-Identification with Video-Text Retrieval',
    description:
      'Developing a novel video-text person re-identification system combining visual embeddings with natural language queries for enhanced retrieval performance.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'Voice Cloning with AutoRegressive Acoustic Models',
    description:
      'Developed automated voice clones using Tortoise-TTS and built a Streamlit application for real-time generation from textual inputs.',
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
    description:
      'Implemented a robust forecasting package by compiling multiple statistical (ARIMA, SARIMAX) and Deep Learning models (RNNs, LSTMs).',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'GANs vs Mixture Models for Image Generation',
    description:
      'Developed DCGAN and WGAN models and compared their outputs with Gaussian Mixture Models, finding GMM images more diverse but less sharp.',
    url: '#',
    image: porfolioImage6,
  },
];

/**
 * Highlights section
 */
export const highlights: HighlightItem[] = [
  {
    title: 'Hackathon Sprint',
    description: 'Led an IIT-wide hackathon team that built a visual analytics dashboard in 24 hours.',
    tag: 'Hackathon',
    image: porfolioImage1,
  },
  {
    title: 'ICLR 2024, Singapore',
    description: 'Presented research on tree-ring watermarking for rectified flow models.',
    tag: 'Conference',
    image: porfolioImage2,
  },
  {
    title: 'Research Residency',
    description: 'Visited AI research labs across India to collaborate on multimodal systems.',
    tag: 'Research',
    image: porfolioImage3,
  },
  {
    title: 'Community Workshop',
    description: 'Organised a hands-on workshop on trustworthy AI for 150+ students.',
    tag: 'Workshop',
    image: porfolioImage4,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2021 — 2026',
    location: 'Indian Institute of Technology, Roorkee',
    title: 'BS-MS, Mathematics & Computing',
    content: (
      <p>
        CGPA 8.61 • Specialized in Machine Learning, Financial Risk, Statistical Inference, and advanced optimisation.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2025 - July 2025',
    location: 'JPMorgan Chase',
    title: 'Intern',
    content: (
      <p>
        Productionised an investment-fee forecasting engine and automated COVID-aware headcount variance tracking for
        Asset & Wealth Management.
      </p>
    ),
  },
  {
    date: 'August 2023 - February 2024',
    location: 'Hashstack Finance',
    title: 'Intern',
    content: (
      <p>
        Built a Starknet risk dashboard, boosted anomaly coverage by 15% with a mean-variance optimiser, and shipped
        automated growth alerts.
      </p>
    ),
  },
  {
    date: 'January 2023 - March 2023',
    location: 'Hloov',
    title: 'Data Science Intern',
    content: (
      <p>
        Delivered a 99.43% accurate VGG-19 crack detector, 96.7%-precision SARIMAX anomaly watch, and LSTM maintenance
        forecasts.
      </p>
    ),
  },
];

/**
 * Research Publications section
 */
export const publications: TimelineItem[] = [
  {
    date: '2025',
    location: 'ICLR, Singapore',
    title:
      'Detection Limits and Statistical Separability of Tree Ring Watermarks in Rectified Flow-based Text-to-Image Generation Models',
    content: (
      <p>
        Co-authored with Aakash Kumar Singh and presented at the International Conference on Learning
        Representations[cite: 94].
      </p>
    ),
  },
  {
    date: '2025',
    location: 'ICCV (Under Review)',
    title: 'DAC-LORA: Dynamic Adversarial Curriculum for Efficient and Robust Few-Shot Adaptation',
    content: <p>Currently under review for the International Conference on Computer Vision[cite: 94].</p>,
  },
];

/**
 * Testimonial section
 * This section is a placeholder. Resume does not contain testimonial information.
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
  ],
};
/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Enforcer03'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ved-umrajkar/'},
  {
    label: 'Google Scholar',
    Icon: GoogleScholarIcon,
    href: 'https://scholar.google.com/citations?user=MgMpgRgAAAAJ&hl=en',
  },
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ved_umrajkar'},
];
