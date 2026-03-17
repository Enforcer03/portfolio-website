import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import AchievementsTimeline from '../components/Sections/AchievementsTimeline';
import Header from '../components/Sections/Header';
import PageIntro from '../components/Sections/PageIntro';
import {homePageMeta} from '../data/data';

const AboutPage: FC = memo(() => {
  const {title, description} = homePageMeta;

  return (
    <Page description={`${description} - About`} title={`${title} | About`}>
      <Header />
      <PageIntro eyebrow="ABOUT" title="Achievements & Milestones" />
      <AchievementsTimeline />
    </Page>
  );
});

export default AboutPage;
