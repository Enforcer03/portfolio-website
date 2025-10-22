import {FC, memo} from 'react';

import {publications, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Publications: FC = memo(() => {
  return (
    <Section className="bg-transparent" sectionId={SectionId.Publications}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-12">
        <div aria-hidden className="pointer-events-none absolute -top-24 right-[-10%] h-64 w-64 rounded-full bg-purple-400/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />
        <div className="relative flex flex-col gap-8">
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-200">Highlights</span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Research Publications</h2>
              <span className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500" />
            </div>
            <p className="mt-4 max-w-xl text-sm text-neutral-200 sm:mt-0 sm:text-base">
              Selected work from conferences and in-progress research focused on robust, efficient machine learning systems.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {publications.map((item, index) => {
              const {title, date, location, content} = item;
              return (
                <article
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/90 p-6 text-left shadow-lg shadow-neutral-900/10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
                  key={`${title}-${index}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 via-orange-100/20 to-purple-100/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-500">
                      <span className="rounded-full bg-orange-500/10 px-3 py-1 text-orange-500/90">{location}</span>
                      <span className="rounded-full bg-purple-500/10 px-3 py-1 text-purple-500/80">{date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 sm:text-xl">{title}</h3>
                  </div>
                  <div className="relative mt-4 space-y-2 text-sm text-neutral-700 sm:text-base [&_strong]:text-neutral-900">
                    {content}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Publications;
