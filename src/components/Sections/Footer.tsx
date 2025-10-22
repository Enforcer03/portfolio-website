import {BoltIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative mt-20 overflow-hidden rounded-t-3xl border-t border-white/10 bg-white/5 px-4 pb-10 pt-16 text-neutral-100 shadow-2xl shadow-black/40 backdrop-blur-xl sm:px-10 sm:pb-14">
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10"
    />
    <div className="absolute inset-x-0 -top-6 flex justify-center sm:-top-8">
      <a
        className="flex items-center justify-center rounded-full border border-white/40 bg-white/80 p-2 text-neutral-900 shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-offset-2 focus:ring-offset-neutral-900 sm:p-3"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
    <div className="relative flex flex-col items-center gap-6">
      <div className="flex flex-wrap justify-center gap-4 text-neutral-200">
        <Socials />
      </div>
      <a
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-neutral-100 transition-colors duration-200 hover:border-orange-400/40 hover:bg-orange-400/10 focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-offset-2 focus:ring-offset-neutral-900"
        href="https://reactresume.com">
        <BoltIcon className="h-5 w-5 text-orange-300" />
        <span className="sm:text-base">
          Powered by <span className="text-white">React</span>
          <span className="italic text-orange-300">Resume</span>
        </span>
      </a>
      <p className="text-center text-xs uppercase tracking-[0.4em] text-neutral-300">
        © {currentYear} Tim Baker — Crafted with care
      </p>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
