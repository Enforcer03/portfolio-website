import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-6 py-8 first:pt-4 last:pb-4 md:grid-cols-5 md:gap-x-12">
      <div className="col-span-1 flex justify-center md:col-span-2 md:justify-start">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-200 md:text-sm">
            {title}
          </h2>
          <span className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 md:w-20" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
