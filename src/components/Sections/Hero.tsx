import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions, interests} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <Image
          alt={`${name}-image`}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          sizes="100vw"
          src={imageSrc}
        />
        <div aria-hidden className="absolute inset-0 z-0 bg-neutral-900/80" />
        <div className="relative z-10 flex w-full justify-center px-4 py-24 sm:px-6 lg:py-32">
          <div className="relative w-full max-w-4xl">
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/50 via-purple-500/30 to-teal-400/40 opacity-90 blur-3xl"
            />
            <div className="relative flex w-full flex-col items-center gap-y-6 rounded-3xl border border-white/10 bg-neutral-900/70 p-6 text-center shadow-2xl shadow-purple-950/30 backdrop-blur-xl sm:p-12">
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{name}</h1>
              {interests?.length ? (
                <>
                  <div className="flex flex-wrap justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-300 sm:text-xs">
                    {interests.map(pill => (
                      <span
                        className="rounded-full border border-orange-300/40 bg-white/5 px-3 py-1 text-orange-200/90 backdrop-blur sm:px-4"
                        key={pill}>
                        {pill}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80 sm:text-sm">
                    {interests.join(' • ')}
                  </p>
                </>
              ) : null}
              <div className="flex flex-col gap-y-3 text-neutral-200 sm:gap-y-4">{description}</div>
              <div className="flex flex-wrap justify-center gap-3 text-neutral-100 sm:gap-4">
                <Socials />
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                {actions.map(({href, text, primary, Icon}) => (
                  <a
                    className={classNames(
                      'flex w-full items-center justify-center gap-x-2 rounded-full border-2 px-5 py-3 text-sm font-semibold text-white ring-offset-neutral-900 transition-colors duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-base',
                      primary
                        ? 'border-orange-500 bg-gradient-to-r from-orange-500/80 to-red-500/80 ring-orange-500 hover:from-orange-400/80 hover:to-red-400/80'
                        : 'border-white/60 bg-white/10 ring-white hover:bg-white/20',
                    )}
                    href={href}
                    key={text}>
                    {text}
                    {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-8 flex justify-center sm:bottom-12">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-neutral-900/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
