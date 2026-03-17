import Link from 'next/link';
import {memo} from 'react';

import Page from '../components/Layout/Page';
import Header from '../components/Sections/Header';
import PageIntro from '../components/Sections/PageIntro';
import {homePageMeta} from '../data/data';

const EducationRedirect = memo(() => {
  const {title, description} = homePageMeta;

  return (
    <Page description={`${description} - Education`} title={`${title} | Education`}>
      <Header />
      <PageIntro eyebrow="EDUCATION" title="This page is archived.">
        <p className="text-neutral-600 dark:text-neutral-200">
          Please use the Home, About, or Blog sections for current content.
        </p>
        <Link
          className="mt-4 inline-flex w-max items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:-translate-y-0.5 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:border-white/20 dark:text-white dark:hover:bg-neutral-800"
          href="/">
          Return home
          <span aria-hidden="true">→</span>
        </Link>
      </PageIntro>
    </Page>
  );
});

export default EducationRedirect;
