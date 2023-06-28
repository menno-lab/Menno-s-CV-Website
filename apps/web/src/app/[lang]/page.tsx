import { VStack } from 'ui';
import { HeroSection } from './_section/hero/HeroSection';
import { ProjectsSection } from './_section/projects/ProjectsSection';

export default function Page() {
    return (
        <VStack>
            <HeroSection />
            <ProjectsSection />
        </VStack>
    );
}
