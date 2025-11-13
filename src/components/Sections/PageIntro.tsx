import {FC, memo, PropsWithChildren, ReactNode} from 'react';

const PageIntro: FC<
  PropsWithChildren<{
    eyebrow: string;
    title: string;
    description?: ReactNode;
  }>
> = memo(({eyebrow, title, description, children}) => {
  return (
    <section className="px-4 pt-28 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400">
            {eyebrow}
          </span>
          <h1 className="text-balance text-4xl font-semibold text-neutral-900 dark:text-white sm:text-5xl">{title}</h1>
          {description ? (
            <p className="text-lg text-neutral-600 dark:text-neutral-200">{description}</p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
});

PageIntro.displayName = 'PageIntro';
export default PageIntro;
