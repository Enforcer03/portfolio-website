import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Header from '../components/Sections/Header';
import PageIntro from '../components/Sections/PageIntro';
import Contact from '../components/Sections/Contact';
import TimelineItem from '../components/Sections/Resume/TimelineItem';
import {education, homePageMeta} from '../data/data';

const EducationPage: FC = memo(() => {
  const {title, description} = homePageMeta;

  return (
    <Page description={`${description} - Education`} title={`${title} | Education`}>
      <Header />
      <PageIntro
        eyebrow="EDUCATION"
        description="Coursework that blends rigorous mathematics with applied machine learning and decision science."
        title="A timeline of learning and layered curiosity."
      />
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-neutral-200/80 bg-white/90 p-6 shadow-2xl shadow-black/5 dark:border-white/10 dark:bg-neutral-900/80 dark:shadow-black/40 sm:p-10">
            <div className="flex flex-col divide-y divide-neutral-200/80 dark:divide-white/10">
              {education.map((item, idx) => (
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

export default EducationPage;
