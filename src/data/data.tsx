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
import resume from './resume.json';

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
export const homePageMeta: HomepageMeta = resume.website.meta;

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
 * Hero section — sourced from resume.json
 */
export const heroData: Hero = {
  imageSrc: profilepic,
  name: resume.basics.name,
  description: (
    <>
      {resume.website.hero.paragraphs.map((p, i) => (
        <p className="prose-sm text-neutral-700 dark:text-stone-200 sm:prose-base lg:prose-lg" key={i}>
          {parseBold(p)}
        </p>
      ))}
    </>
  ),
  actions: resume.website.hero.actions.map(({href, text, primary, icon}) => ({
    href,
    text,
    primary,
    ...(icon && actionIconMap[icon] ? {Icon: actionIconMap[icon]} : {}),
  })),
};

/**
 * Social links — sourced from resume.json
 */
const socialIconMap: Record<string, Social['Icon']> = {
  Github: GithubIcon,
  LinkedIn: LinkedInIcon,
  GoogleScholar: GoogleScholarIcon,
  Twitter: TwitterIcon,
};

export const socialLinks: Social[] = resume.website.socials
  .filter(({label}) => label in socialIconMap)
  .map(({label, href}) => ({label, Icon: socialIconMap[label], href}));

/**
 * Achievements timeline — derived from inline `timeline` keys on resume entries.
 * Any education / experience / project / award / volunteering item that defines
 * a non-null `timeline` block contributes a card. Declaration order in
 * resume.json determines order on the page.
 */
type WithTimeline = {timeline?: TimelineAchievement | null};

const collectTimeline = (items: ReadonlyArray<WithTimeline>): TimelineAchievement[] =>
  items.map(i => i.timeline).filter((t): t is TimelineAchievement => t != null);

export const achievementsTimeline: TimelineAchievement[] = [
  ...collectTimeline(resume.education),
  ...collectTimeline(resume.volunteering),
  ...collectTimeline(resume.experience),
  ...collectTimeline(resume.awards),
  ...collectTimeline(resume.projects),
];

/**
 * About section (kept for the /about page layout)
 */
export const aboutData: About = {
  profileImageSrc: undefined,
  description: resume.website.hero.paragraphs.join(' ').replace(/\*\*(.+?)\*\*/g, '$1'),
  achievements: achievementsTimeline.map(t => `${t.title} — ${t.description}`),
  aboutItems: [],
};

/**
 * External site links — sourced from resume.json
 */
export const siteLinks = resume.website.links;

/**
 * Contact section — sourced from resume.json
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me for any opportunities or collaborations.',
  items: [
    {
      type: ContactType.Email,
      text: resume.basics.email,
      href: `mailto:${resume.basics.email}`,
    },
  ],
};
