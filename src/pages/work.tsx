import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Header from '../components/Sections/Header';
import PageIntro from '../components/Sections/PageIntro';
import Contact from '../components/Sections/Contact';
import TimelineItem from '../components/Sections/Resume/TimelineItem';
import {experience, homePageMeta} from '../data/data';

const focusAreas = [
  {
    title: 'ML Systems',
    copy: 'Built deployable ML services for wealth forecasting, anomaly detection, and long-horizon planning.',
  },
  {
    title: 'Product Thinking',
    copy: 'Shipped dashboards and alerts that helped teams act on data quickly during internships.',
  },
  {
    title: 'Research to impact',
    copy: 'Translate research on watermarking and representation learning into practical prototypes.',
  },
];

const WorkPage: FC = memo(() => {
  const {title, description} = homePageMeta;

  return (
    <Page description={`${description} - Work`} title={`${title} | Work`}>
      <Header />
      <PageIntro
        eyebrow="WORK"
        description="Internships and residencies where I transformed research ideas into measurable impact."
        title="Hands-on experience across quant, risk, and AI research."
      />
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {focusAreas.map(area => (
            <div
              className="rounded-2xl border border-neutral-200/80 bg-white/90 p-5 text-neutral-700 shadow-md shadow-black/5 dark:border-white/10 dark:bg-neutral-900/70 dark:text-neutral-100 dark:shadow-black/30"
              key={area.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500 dark:text-orange-200">
                {area.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed">{area.copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-neutral-200/80 bg-white/90 p-6 shadow-2xl shadow-black/5 dark:border-white/10 dark:bg-neutral-900/80 dark:shadow-black/40 sm:p-10">
            <div className="flex flex-col divide-y divide-neutral-200/80 dark:divide-white/10">
              {experience.map((item, idx) => (
                <TimelineItem item={item} key={`${item.title}-${idx}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </Page>
  );
});

export default WorkPage;
