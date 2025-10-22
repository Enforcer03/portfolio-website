import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems, achievements} = aboutData;
  return (
    <Section className="bg-transparent" maxWidthClass="max-w-6xl" sectionId={SectionId.About}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-orange-500/30 blur-3xl sm:h-56 sm:w-56"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-[-15%] h-48 w-48 rounded-full bg-teal-400/30 blur-3xl"
        />
        <div
          className={classNames('relative grid grid-cols-1 items-center gap-12', {
            'xl:grid-cols-[auto_1fr]': !!profileImageSrc,
          })}>
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
          <div className="flex flex-col gap-10 text-neutral-100">
            <div className="flex flex-col gap-5 text-center xl:text-left">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">Biography</span>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">About Me</h2>
              </div>
              <p className="text-lg leading-8 text-neutral-100 sm:text-xl">{description}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 text-left xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
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
              {achievements?.length ? (
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200 sm:text-sm">
                    Recent Highlights
                  </span>
                  <ul className="space-y-3 text-sm leading-relaxed text-neutral-100 sm:text-base lg:text-lg">
                    {achievements.map((item, idx) => (
                      <li className="flex items-start gap-2" key={idx}>
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-orange-400 to-purple-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
