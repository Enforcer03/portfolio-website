import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import profilepic from '../images/dp-white-back.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Social,
  TimelineAchievement,
} from './dataDef';
import profile from './profile.json';

/**
 * Parses **bold** markers in a string into JSX with <strong> elements.
 */
function parseBold(text: string): JSX.Element {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
    </>
  );
}

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = profile.meta;

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
 * Icon map for hero actions
 */
const actionIconMap: Record<string, typeof ArrowDownTrayIcon> = {
  download: ArrowDownTrayIcon,
};

/**
 * Hero section — sourced from profile.json
 */
export const heroData: Hero = {
  imageSrc: profilepic,
  name: profile.hero.name,
  description: (
    <>
      {profile.hero.paragraphs.map((p, i) => (
        <p className="prose-sm text-neutral-700 dark:text-stone-200 sm:prose-base lg:prose-lg" key={i}>
          {parseBold(p)}
        </p>
      ))}
    </>
  ),
  actions: profile.hero.actions.map(({href, text, primary, icon}) => ({
    href,
    text,
    primary,
    ...(icon && actionIconMap[icon] ? {Icon: actionIconMap[icon]} : {}),
  })),
};

/**
 * Social links — sourced from profile.json
 */
const socialIconMap: Record<string, Social['Icon']> = {
  Github: GithubIcon,
  LinkedIn: LinkedInIcon,
  GoogleScholar: GoogleScholarIcon,
  Twitter: TwitterIcon,
};

export const socialLinks: Social[] = profile.socials
  .filter(({label}) => label in socialIconMap)
  .map(({label, href}) => ({label, Icon: socialIconMap[label], href}));

/**
 * Achievements timeline — sourced from profile.json
 */
export const achievementsTimeline: TimelineAchievement[] = profile.timeline;

/**
 * About section (kept for the /about page layout)
 */
export const aboutData: About = {
  profileImageSrc: undefined,
  description: profile.hero.paragraphs.join(' ').replace(/\*\*(.+?)\*\*/g, '$1'),
  achievements: profile.timeline.map(t => `${t.title} — ${t.description}`),
  aboutItems: [],
};

/**
 * External site links — sourced from profile.json
 */
export const siteLinks = profile.links;

/**
 * Contact section — sourced from profile.json
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me for any opportunities or collaborations.',
  items: [
    {
      type: ContactType.Email,
      text: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
    },
  ],
};
