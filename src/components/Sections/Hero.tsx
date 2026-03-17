import {ChevronDownIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {CSSProperties, FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const imageStyle: CSSProperties = {
  maskImage: 'radial-gradient(circle, black 55%, transparent 90%)',
  WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 90%)',
};

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section className="pt-28" sectionId={SectionId.Hero}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm sm:p-12 lg:flex-row lg:items-center dark:border-white/10 dark:bg-neutral-900/80">
        {imageSrc ? (
          <div className="flex-shrink-0 self-center">
            <Image
              alt={`${name}-portrait`}
              className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56"
              height={224}
              priority
              src={imageSrc}
              style={imageStyle}
              width={224}
            />
          </div>
        ) : null}

        <div className="flex flex-1 flex-col gap-6 text-left text-neutral-900 dark:text-white">
          <div className="flex flex-col gap-2">
            <h1 className="text-balance text-4xl font-semibold text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
              {name}
            </h1>
          </div>

          <div className="flex max-w-3xl flex-col gap-3 text-base leading-relaxed text-neutral-700 sm:text-lg dark:text-neutral-200">
            {description}
          </div>

          <div className="flex flex-wrap gap-3 text-neutral-700 dark:text-neutral-100 sm:gap-4">
            <Socials />
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
            {actions.map(({href, text, primary, Icon}) => (
              <a
                className={`flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:focus:ring-neutral-600 sm:w-auto sm:text-base ${
                  primary
                    ? 'border-indigo-500 bg-indigo-600 text-white hover:bg-indigo-500 dark:border-indigo-300 dark:bg-indigo-400 dark:text-neutral-900'
                    : 'border-neutral-300 text-neutral-900 hover:bg-neutral-100 dark:border-white/30 dark:text-white dark:hover:bg-neutral-800'
                }`}
                href={href}
                key={text}>
                {text}
                {Icon ? <Icon className="h-5 w-5 sm:h-6 sm:w-6" /> : null}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:border-white/20 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
          href={`/#${SectionId.About}`}>
          <span>My Journey</span>
          <ChevronDownIcon className="h-5 w-5" />
        </a>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
