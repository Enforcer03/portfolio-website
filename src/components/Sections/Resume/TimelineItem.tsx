import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="group relative flex flex-col pb-10 last:pb-0">
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/90 p-6 shadow-lg shadow-black/10 transition-transform duration-200 group-hover:-translate-y-1 group-hover:border-orange-300/50 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 via-orange-100/30 to-purple-100/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-neutral-900 sm:text-xl">{title}</h3>
              <span className="text-sm font-medium text-neutral-500 sm:text-base">{location}</span>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-500">
              {date}
            </span>
          </div>
          <div className="text-sm leading-relaxed text-neutral-700 sm:text-base [&_strong]:text-neutral-900">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
