import dynamic from 'next/dynamic';
import {GetStaticProps, NextPage} from 'next';
import {memo} from 'react';

import Page from '../components/Layout/Page';
import Blogs from '../components/Sections/Blogs';
import Contact from '../components/Sections/Contact';
import Hero from '../components/Sections/Hero';
import Highlights from '../components/Sections/Highlights';
import {homePageMeta} from '../data/data';
import {getAllBlogsMeta} from '../lib/blogs';
import {BlogMeta} from '../types/blog';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

type HomeProps = {
  blogPosts: BlogMeta[];
};

const Home: NextPage<HomeProps> = memo(({blogPosts}) => {
  const {title, description} = homePageMeta;

  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <Highlights />
      <Blogs posts={blogPosts} />
      <Contact />
    </Page>
  );
});

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const blogPosts = getAllBlogsMeta().slice(0, 4);

  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
