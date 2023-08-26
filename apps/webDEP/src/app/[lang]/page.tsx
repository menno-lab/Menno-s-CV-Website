import { VStack } from 'ui';
import { RouteWithLang } from '../../utils/types';
import { useTranslation } from '../../i18n';
import { ExperienceSection } from '../../layout/home-sections/experience/ExperienceSection';
import { experienceTranslationsSchema } from '../../layout/home-sections/experience/schema';
import { HeroBottomSection } from '../../layout/home-sections/hero-bottom/HeroBottomSection';
import { heroBottomTranslationsSchema } from '../../layout/home-sections/hero-bottom/schema';
import { HeroSection } from '../../layout/home-sections/hero/HeroSection';
import { heroTranslationsSchema } from '../../layout/home-sections/hero/schema';
import { ProjectsSection } from '../../layout/home-sections/projects/ProjectsSection';
import { projectsTranslationsSchema } from '../../layout/home-sections/projects/schema';

export default async function Page({ params: { lang } }: RouteWithLang) {
    const { t } = await useTranslation(lang);

    return (
        <VStack spacing={6}>
            <HeroSection translations={heroTranslationsSchema.parse(t('hero'))} />
            <ProjectsSection translations={projectsTranslationsSchema.parse(t('projects'))} />
            <ExperienceSection translations={experienceTranslationsSchema.parse(t('experience'))} />
            <HeroBottomSection translations={heroBottomTranslationsSchema.parse(t('heroBottom'))} />
        </VStack>
    );
}
