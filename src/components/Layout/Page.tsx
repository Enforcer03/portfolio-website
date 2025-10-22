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
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-neutral-100">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/40 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute bottom-[-10%] left-[-10%] h-64 w-64 rounded-full bg-purple-500/30 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute right-[-5%] top-1/3 h-60 w-60 rounded-full bg-teal-400/30 blur-3xl sm:h-72 sm:w-72" />
        </div>
        <main className="relative flex flex-1 flex-col">{children}</main>
      </div>
    </>
  );
});

Page.displayName = 'Page';
export default Page;
