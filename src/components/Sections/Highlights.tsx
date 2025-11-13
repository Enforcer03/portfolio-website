import Image from 'next/image';
import {FC, memo, useMemo} from 'react';

import {highlights, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Highlights: FC = memo(() => {
  const marqueeItems = useMemo(() => [...highlights, ...highlights], []);

  return (
    <Section className="bg-transparent" maxWidthClass="max-w-6xl" sectionId={SectionId.Highlights}>
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/90 p-6 shadow-xl shadow-black/5 ring-1 ring-black/5 dark:border-white/10 dark:bg-neutral-900/80 dark:shadow-black/30 sm:p-10">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-neutral-500 dark:text-neutral-400">
            Highlights
          </span>
          <h2 className="text-balance text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
            Moments that keep me inspired
          </h2>
          <p className="max-w-2xl text-sm text-neutral-500 dark:text-neutral-300 sm:text-base">
            A rolling glimpse of hackathons, conferences, and residencies I have been part of recently.
          </p>
        </div>
        <div className="relative mt-10 overflow-hidden rounded-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-neutral-900" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-neutral-900" />
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map(({image, title, description, tag}, idx) => (
              <figure
                className="group relative h-48 w-64 flex-shrink-0 overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-1 dark:border-white/10 dark:bg-neutral-800/80 dark:shadow-black/40 sm:h-56 sm:w-72"
                key={`${title}-${idx}`}>
                <Image
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 70vw, 330px"
                  src={image}
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-neutral-900/80 via-neutral-900/30 to-transparent p-4 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">{tag}</span>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs text-neutral-200">{description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
});

Highlights.displayName = 'Highlights';
export default Highlights;
