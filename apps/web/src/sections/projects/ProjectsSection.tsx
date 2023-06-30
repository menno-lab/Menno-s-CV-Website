import React from 'react';
import { Text } from 'ui';
import { PageSection } from '../shared/PageSection';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
    return (
        <PageSection title='Projects'>
            <ProjectCard />
        </PageSection>
    );
}
