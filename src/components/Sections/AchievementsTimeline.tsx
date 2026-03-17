import classNames from 'classnames';
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';

import { achievementsTimeline, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const tagStyle: Record<
  string,
  { border: string; dot: string; label: string; btn: string; btnActive: string }
> = {
  Education: {
    border: 'border-l-indigo-400 dark:border-l-indigo-500',
    dot: 'bg-indigo-500 ring-indigo-100 dark:bg-indigo-400 dark:ring-indigo-900/50',
    label: 'text-indigo-500 dark:text-indigo-400',
    btn: 'border-indigo-200 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-950/40',
    btnActive: 'bg-indigo-600 border-indigo-600 text-white dark:bg-indigo-500 dark:border-indigo-500',
  },
  Industry: {
    border: 'border-l-slate-500 dark:border-l-slate-400',
    dot: 'bg-slate-600 ring-slate-100 dark:bg-slate-400 dark:ring-slate-900/50',
    label: 'text-slate-500 dark:text-slate-400',
    btn: 'border-slate-300 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/40',
    btnActive: 'bg-slate-700 border-slate-700 text-white dark:bg-slate-500 dark:border-slate-500',
  },
  Research: {
    border: 'border-l-teal-500 dark:border-l-teal-400',
    dot: 'bg-teal-600 ring-teal-100 dark:bg-teal-400 dark:ring-teal-900/50',
    label: 'text-teal-600 dark:text-teal-400',
    btn: 'border-teal-200 text-teal-700 hover:bg-teal-50 dark:border-teal-800 dark:text-teal-400 dark:hover:bg-teal-950/40',
    btnActive: 'bg-teal-600 border-teal-600 text-white dark:bg-teal-500 dark:border-teal-500',
  },
  Swag: {
    border: 'border-l-amber-400 dark:border-l-amber-500',
    dot: 'bg-amber-500 ring-amber-100 dark:bg-amber-400 dark:ring-amber-900/50',
    label: 'text-amber-600 dark:text-amber-400',
    btn: 'border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400 dark:hover:bg-amber-950/40',
    btnActive: 'bg-amber-500 border-amber-500 text-white dark:bg-amber-500 dark:border-amber-500',
  },
};

const fallback = {
  border: 'border-l-neutral-400',
  dot: 'bg-neutral-500 ring-neutral-100 dark:bg-neutral-400 dark:ring-neutral-900/50',
  label: 'text-neutral-500',
  btn: 'border-neutral-200 text-neutral-600',
  btnActive: 'bg-neutral-700 text-white',
};

// Increased ZONE_H from 280 to 380 to prevent taller cards from overshooting
const ZONE_H = 380; 
const NODE_W = 210;
const SPEED = 0.15; 

const Card: FC<{ item: (typeof achievementsTimeline)[number] }> = memo(({ item }) => {
  const s = tagStyle[item.tag] ?? fallback;
  return (
    <div
      className={classNames(
        'w-44 select-none rounded-2xl border border-neutral-200 border-l-[3px] bg-white p-4 shadow-sm',
        'dark:border-neutral-700 dark:bg-neutral-800/90',
        s.border,
      )}>
      <p className={classNames('mb-1 text-[10px] font-semibold uppercase tracking-widest', s.label)}>
        {item.tag}
      </p>
      <p className="text-[11px] text-neutral-400 dark:text-neutral-500">{item.date}</p>
      <p className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">{item.title}</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.subtitle}</p>
      <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
        {item.description}
      </p>
    </div>
  );
});

const AchievementsTimeline: FC = memo(() => {
  const allTags = [...new Set(achievementsTimeline.map(t => t.tag))];
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const filtered = activeTag
    ? achievementsTimeline.filter(t => t.tag === activeTag)
    : achievementsTimeline;

  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const lastTime = useRef<number>(0);
  const direction = useRef<1 | -1>(1);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    lastTime.current = 0;
    direction.current = 1;
  }, [activeTag]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    lastTime.current = 0;

    const step = (now: number) => {
      if (!paused && el) {
        const delta = lastTime.current ? Math.min(now - lastTime.current, 64) : 0;
        const maxScroll = el.scrollWidth - el.clientWidth;

        if (maxScroll > 0) {
          if (el.scrollLeft >= maxScroll - 1) {
            direction.current = -1;
          } else if (el.scrollLeft <= 0) {
            direction.current = 1;
          }

          el.scrollLeft += SPEED * delta * direction.current;
        }
      }
      lastTime.current = now;
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [paused]);

  const toggleTag = useCallback((tag: string) => {
    setActiveTag(prev => (prev === tag ? null : tag));
  }, []);

  if (!filtered.length) return null;

  return (
    <Section className="bg-transparent" maxWidthClass="max-w-6xl" sectionId={SectionId.About}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-400 dark:text-neutral-500">
            Journey
          </span>
          <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
            TL;DR of my path so far :)
          </h2>
          <p className="mx-auto max-w-xl text-base text-neutral-500 dark:text-neutral-400">
            A timeline of my academic, research, industry, and community milestones.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {allTags.map(tag => {
            const s = tagStyle[tag] ?? fallback;
            const isActive = activeTag === tag;
            return (
              <button
                className={classNames(
                  'flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-150',
                  isActive ? s.btnActive : s.btn,
                )}
                key={tag}
                onClick={() => toggleTag(tag)}
                type="button">
                <span
                  className={classNames(
                    'h-2 w-2 rounded-full transition-colors',
                    isActive ? 'bg-white/80' : s.dot.split(' ')[0],
                  )}
                />
                {tag}
              </button>
            );
          })}
          {activeTag && (
            <button
              className="rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-semibold text-neutral-500 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800"
              onClick={() => setActiveTag(null)}
              type="button">
              Show all
            </button>
          )}
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-50 dark:from-neutral-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-50 dark:from-neutral-950" />

          <div
            className="timeline-scroll overflow-x-scroll"
            ref={scrollRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`.timeline-scroll::-webkit-scrollbar { display: none; }`}</style>

            <div className="relative" style={{ width: `${filtered.length * NODE_W}px` }}>
              <div
                className="absolute left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-700"
                style={{ top: `${ZONE_H + 8}px` }}
              />

              <div className="flex">
                {filtered.map((item, idx) => {
                  const isAbove = idx % 2 === 0;
                  const s = tagStyle[item.tag] ?? fallback;
                  return (
                    <div
                      className="flex flex-shrink-0 flex-col items-center"
                      key={`${item.title}-${idx}`} 
                      style={{ width: `${NODE_W}px` }}>
                      <div
                        className="flex w-full items-end justify-center px-2 pb-4"
                        style={{ height: `${ZONE_H}px` }}>
                        {isAbove && <Card item={item} />}
                      </div>

                      <div
                        className={classNames(
                          'relative z-10 h-4 w-4 flex-shrink-0 rounded-full ring-4',
                          s.dot,
                        )}
                      />

                      <div
                        className="flex w-full items-start justify-center px-2 pt-4"
                        style={{ height: `${ZONE_H}px` }}>
                        {!isAbove && <Card item={item} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Card.displayName = 'Card';
AchievementsTimeline.displayName = 'AchievementsTimeline';
export default AchievementsTimeline;