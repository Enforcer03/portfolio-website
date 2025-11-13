import Link from 'next/link';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import {BlogMeta} from '../../types/blog';
import Section from '../Layout/Section';

const Blogs: FC<{posts: BlogMeta[]}> = memo(({posts}) => {
  return (
    <Section className="bg-transparent" maxWidthClass="max-w-6xl" sectionId={SectionId.Blogs}>
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/90 p-6 shadow-2xl shadow-black/5 dark:border-white/10 dark:bg-neutral-900/80 dark:shadow-black/30 sm:p-12">
        <div className="flex flex-col gap-4 text-center sm:gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-neutral-500 dark:text-neutral-400">
            Blogs
          </span>
          <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
            Notes from research, builds, and experiments
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
            Rendered from Markdown files in <code>content/blogs</code>. Commit a new file and it appears automatically.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.length
            ? posts.map(post => (
                <article
                  className="flex flex-col rounded-2xl border border-neutral-200/80 bg-white/80 p-6 text-left shadow-lg shadow-black/5 transition-transform duration-200 hover:-translate-y-1 hover:border-orange-400/50 dark:border-white/10 dark:bg-neutral-800/70 dark:shadow-black/40"
                  key={post.slug}>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500 dark:text-orange-200">
                    {new Date(post.date).toLocaleDateString(undefined, {month: 'short', day: 'numeric', year: 'numeric'})}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-white">{post.title}</h3>
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
                    Read article →
                  </Link>
                </article>
              ))
            : (
                <p className="col-span-full text-center text-sm text-neutral-500 dark:text-neutral-300">
                  No posts yet — drop a Markdown file in <code>content/blogs</code> to get started.
                </p>
              )}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            className="inline-flex items-center rounded-full border border-neutral-900/10 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-neutral-800 dark:border-white/10 dark:bg-white dark:text-neutral-900"
            href="/blog">
            View all posts
          </Link>
        </div>
      </div>
    </Section>
  );
});

Blogs.displayName = 'Blogs';
export default Blogs;
