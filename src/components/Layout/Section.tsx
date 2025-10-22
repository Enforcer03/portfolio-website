import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<
  PropsWithChildren<{
    sectionId: SectionId;
    sectionTitle?: string;
    noPadding?: boolean;
    className?: string;
    maxWidthClass?: string;
  }>
> = memo(({children, sectionId, noPadding = false, className, maxWidthClass}) => {
  const containerClass = noPadding
    ? classNames('w-full', maxWidthClass)
    : classNames('mx-auto w-full', maxWidthClass ?? 'max-w-5xl');

  return (
    <section
      className={classNames('scroll-mt-24', className, {'px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24': !noPadding})}
      id={sectionId}>
      <div className={containerClass}>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
