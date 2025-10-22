import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-transparent" sectionId={SectionId.About}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-12">
        <div aria-hidden className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-orange-500/30 blur-3xl sm:h-56 sm:w-56" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 right-[-15%] h-48 w-48 rounded-full bg-teal-400/30 blur-3xl" />
        <div className={classNames('relative grid grid-cols-1 items-center gap-10', {'lg:grid-cols-[auto_1fr]': !!profileImageSrc})}>
          {!!profileImageSrc && (
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/70 to-purple-500/60 opacity-80 blur-xl" />
                <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-white/20 shadow-lg shadow-black/30 sm:h-36 sm:w-36">
                  <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-8 text-neutral-100">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">Biography</span>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">About Me</h2>
              </div>
              <p className="text-base leading-relaxed text-neutral-200 sm:text-lg">{description}</p>
            </div>
            <ul className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li
                  className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-orange-400/10"
                  key={idx}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-orange-200">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wide text-orange-200/80">{label}</span>
                    <span className="text-sm text-neutral-100 sm:text-base">{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
