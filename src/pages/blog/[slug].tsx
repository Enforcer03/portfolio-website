import Head from 'next/head';
import Link from 'next/link';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {memo} from 'react';

import Page from '../../components/Layout/Page';
import Header from '../../components/Sections/Header';
import {homePageMeta} from '../../data/data';
import {getBlogBySlug, getBlogSlugs} from '../../lib/blogs';
import {BlogPost} from '../../types/blog';

type BlogPostProps = {
  post: BlogPost;
};

const BlogPostPage: NextPage<BlogPostProps> = memo(({post}) => {
  const {title, excerpt, contentHtml, date, tags} = post;
  const pageTitle = `${title} | ${homePageMeta.title}`;

  return (
    <Page description={excerpt} title={pageTitle}>
      <Head>
        <meta content={excerpt} property="og:description" />
        <meta content={pageTitle} property="og:title" />
      </Head>
      <Header />
      <article className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500 transition hover:text-orange-500 dark:text-neutral-400"
            href="/blog">
            ← Back to blog
          </Link>
          <h1 className="mt-4 text-balance text-4xl font-semibold text-neutral-900 dark:text-white sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            {new Date(date).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'})}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span
                className="rounded-full border border-neutral-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:border-white/20 dark:text-neutral-300"
                key={`${post.slug}-${tag}`}>
                {tag}
              </span>
            ))}
          </div>
          <div
            className="prose prose-neutral prose-lg mt-10 max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{__html: contentHtml}}
          />
        </div>
      </article>
    </Page>
  );
});

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getBlogSlugs();

  return {
    paths: slugs.map(slug => ({params: {slug}})),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({params}) => {
  const slug = params?.slug as string;
  const post = getBlogBySlug(slug);

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;
