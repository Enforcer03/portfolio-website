import {NextPage} from 'next';
import dynamic from 'next/dynamic';
import {memo} from 'react';

import Page from '../components/Layout/Page';
import AchievementsTimeline from '../components/Sections/AchievementsTimeline';
import Hero from '../components/Sections/Hero';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: NextPage = memo(() => {
  const {title, description} = homePageMeta;

  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <AchievementsTimeline />
    </Page>
  );
});

export default Home;
