import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
// import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-transparent" maxWidthClass="max-w-6xl" sectionId={SectionId.Resume}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-12 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-400/30 blur-3xl sm:h-56 sm:w-56"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-64 w-64 rounded-full bg-purple-400/30 blur-3xl"
        />
        <div className="relative flex flex-col divide-y divide-white/10">
          <ResumeSection title="Education">
            {(education ?? []).map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Work">
            {(experience ?? []).map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          {/* <ResumeSection title="Skills">
            <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map((skillgroup, index) => (
                <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
              ))}
            </div>
          </ResumeSection> */}
        </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
