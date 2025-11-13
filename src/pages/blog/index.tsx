import Link from 'next/link';
import {GetStaticProps, NextPage} from 'next';
import {memo} from 'react';

import Page from '../../components/Layout/Page';
import Header from '../../components/Sections/Header';
import {homePageMeta} from '../../data/data';
import {getAllBlogsMeta} from '../../lib/blogs';
import {BlogMeta} from '../../types/blog';

type BlogIndexProps = {
  posts: BlogMeta[];
};

const BlogIndexPage: NextPage<BlogIndexProps> = memo(({posts}) => {
  const pageTitle = `${homePageMeta.title} | Blog`;
  const pageDescription = 'Long-form notes pulled directly from Markdown files in the repository.';

  return (
    <Page description={pageDescription} title={pageTitle}>
      <Header />
      <section className="px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-neutral-500 dark:text-neutral-400">
            Blog
          </span>
          <h1 className="text-balance text-4xl font-semibold text-neutral-900 dark:text-white sm:text-5xl">
            Essays, experiments, and working notes
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-200">
            Push a Markdown file into <code>content/blogs</code> to publish a new post automatically.
          </p>
        </div>
      </section>
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {posts.map(post => (
            <article
              className="flex flex-col rounded-2xl border border-neutral-200/80 bg-white/90 p-6 text-left shadow-lg shadow-black/5 transition-transform duration-200 hover:-translate-y-1 hover:border-orange-400/50 dark:border-white/10 dark:bg-neutral-900/80 dark:shadow-black/40"
              key={post.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500 dark:text-orange-200">
                {new Date(post.date).toLocaleDateString(undefined, {month: 'short', day: 'numeric', year: 'numeric'})}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-white">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm text-neutral-600 dark:text-neutral-200">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    className="rounded-full border border-neutral-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:border-white/20 dark:text-neutral-300"
                    key={`${post.slug}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-500 dark:text-orange-200"
                href={`/blog/${post.slug}`}>
                Continue reading →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
});

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllBlogsMeta();

  return {
    props: {
      posts,
    },
  };
};

export default BlogIndexPage;
