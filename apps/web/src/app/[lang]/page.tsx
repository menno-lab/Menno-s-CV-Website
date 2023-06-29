import { VStack } from 'ui';
import { HeroSection } from '../_section/hero/HeroSection';
import { ProjectsSection } from '../_section/projects/ProjectsSection';

export default async function Page() {
    return (
        <VStack spacing={6}>
            <HeroSection />
            <ProjectsSection />
        </VStack>
    );
}
