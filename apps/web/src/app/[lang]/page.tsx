import { VStack } from 'ui';
import { HeroSection } from '../../sections/hero/HeroSection';
import { ProjectsSection } from '../../sections/projects/ProjectsSection';
import { RouteWithChildren } from '../../utils/types';
import { useTranslation } from '../../i18n';
import { heroTranslationsSchema } from '../../sections/hero/schema';
import { projectsTranslationsSchema } from '../../sections/projects/schema';
import { HeroBottomSection } from '../../sections/hero-bottom/HeroBottomSection';
import { heroBottomTranslationsSchema } from '../../sections/hero-bottom/schema';

export default async function Page({ params: { lang } }: RouteWithChildren) {
    const { t } = await useTranslation(lang);

    return (
        <VStack spacing={6}>
            <HeroSection translations={heroTranslationsSchema.parse(t('hero'))} />
            <ProjectsSection translations={projectsTranslationsSchema.parse(t('projects'))} />
            <HeroBottomSection translations={heroBottomTranslationsSchema.parse(t('heroBottom'))} />
        </VStack>
    );
}
