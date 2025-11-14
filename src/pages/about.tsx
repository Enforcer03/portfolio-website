import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Header from '../components/Sections/Header';
import PageIntro from '../components/Sections/PageIntro';
import {homePageMeta} from '../data/data';

const AboutPage: FC = memo(() => {
  const {title, description} = homePageMeta;

  return (
    <Page description={`${description} - About`} title={`${title} | About`}>
      <Header />
      <PageIntro
        description="A deeper look at my values, interests, and the highlights that shaped my journey in research and product teams."
        eyebrow="ABOUT"
        title="Minimalist by choice, experimental at heart."
      />
      <About />
      <Contact />
    </Page>
  );
});

export default AboutPage;
