import { VStack } from 'ui';
import { HeroSection } from '../../sections/hero/HeroSection';
import { ProjectsSection } from '../../sections/projects/ProjectsSection';
import { RouteWithChildren } from '../../utils/types';
import { useTranslation } from '../../i18n';

export default async function Page({ params: { lang } }: RouteWithChildren) {
    const { t } = await useTranslation(lang);

    return (
        <VStack spacing={6}>
            <HeroSection translations={t('hero') as unknown as Record<string, string>} />
            <ProjectsSection />
        </VStack>
    );
}
