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
        {imageSrc ? (
          <>
            <Image
              alt={`${name}-image`}
              className="absolute inset-0 z-0 h-full w-full object-cover"
              placeholder="blur"
              priority
              sizes="100vw"
              src={imageSrc}
            />
            <div aria-hidden className="absolute inset-0 z-0 bg-white/75 dark:bg-neutral-950/85" />
          </>
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-gradient-to-br from-orange-100 via-white to-teal-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900"
          />
        )}
        <div className="relative z-10 flex w-full justify-center px-4 py-24 sm:px-6 lg:py-32">
          <div className="relative w-full max-w-4xl">
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-200/60 via-pink-200/40 to-teal-200/40 opacity-80 blur-3xl dark:from-orange-500/40 dark:via-purple-500/30 dark:to-teal-500/30"
            />
            <div className="relative flex w-full flex-col items-center gap-y-6 rounded-3xl border border-neutral-200/70 bg-white/90 p-6 text-center shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/70 dark:shadow-black/40 sm:p-12">
              <h1 className="text-balance text-4xl font-bold text-neutral-900 animate-fade-up dark:text-white sm:text-5xl lg:text-6xl">
                {name}
              </h1>
              {interests?.length ? (
                <>
                  <div className="flex flex-wrap justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-400 dark:text-orange-200 sm:text-xs">
                    {interests.map(pill => (
                      <span
                        className="rounded-full border border-orange-300/60 bg-orange-50 px-3 py-1 text-orange-500 backdrop-blur dark:border-orange-300/40 dark:bg-white/5 dark:text-orange-200 sm:px-4"
                        key={pill}>
                        {pill}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600/80 dark:text-cyan-200/80 sm:text-sm">
                    {interests.join(' • ')}
                  </p>
                </>
              ) : null}
              <div className="flex flex-col gap-y-3 text-neutral-600 animate-fade-up-delayed dark:text-neutral-200 sm:gap-y-4">
                {description}
              </div>
              <div className="flex flex-wrap justify-center gap-3 text-neutral-700 dark:text-neutral-100 sm:gap-4">
                <Socials />
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                {actions.map(({href, text, primary, Icon}) => (
                  <a
                    className={classNames(
                      'flex w-full items-center justify-center gap-x-2 rounded-full border-2 px-5 py-3 text-sm font-semibold ring-offset-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-neutral-900 sm:w-auto sm:text-base',
                      primary
                        ? 'border-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white ring-orange-500/60 hover:shadow-orange-500/30'
                        : 'border-neutral-800 bg-transparent text-neutral-900 ring-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-white/60 dark:text-white',
                    )}
                    href={href}
                    key={text}>
                    {text}
                    {Icon && (
                      <Icon
                        className={classNames(
                          'h-5 w-5 sm:h-6 sm:w-6',
                          primary ? 'text-white' : 'text-neutral-900 dark:text-white',
                        )}
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-8 flex justify-center sm:bottom-12">
          <a
            className="rounded-full bg-white p-1 text-neutral-900 ring-neutral-900/20 ring-offset-2 ring-offset-white shadow-md focus:outline-none focus:ring-2 dark:bg-neutral-900 dark:text-white dark:ring-white/40 dark:ring-offset-neutral-900 sm:p-2"
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
