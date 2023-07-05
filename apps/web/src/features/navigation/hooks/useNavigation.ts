import { useParams, usePathname, useRouter } from 'next/navigation';

export function useNavigation() {
    const { lang } = useParams();
    const pathname = usePathname();
    const pathWithoutLang = pathname.length > 3 ? pathname.substring(3) : undefined;
    return {
        pathWithoutLang,
    };
}
