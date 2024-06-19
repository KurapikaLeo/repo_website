
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import SectionDivider from './section-divider';
import React from 'react';
import Project from "./project"

export default function Projects() {
  return (
   <section>
    <SectionDivider />
    <SectionHeading>My Projects</SectionHeading>
    <div>
      {
        projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project}/>
          </React.Fragment>
        ))}
    </div>
   </section>
  );
}


