import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://reactresume.com${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://reactresume.com${pathname}`} property="og:url" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-[rgb(var(--background))] text-[rgb(var(--foreground))] transition-colors duration-300">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-orange-200/30 to-transparent dark:from-orange-500/10" />
          <div className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-500/20" />
          <div className="absolute -right-10 top-1/4 h-72 w-72 rounded-full bg-teal-200/50 blur-3xl dark:bg-teal-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_55%)] opacity-40 dark:opacity-10" />
        </div>
        <main className="relative flex flex-1 flex-col">{children}</main>
      </div>
    </>
  );
});

Page.displayName = 'Page';
export default Page;
