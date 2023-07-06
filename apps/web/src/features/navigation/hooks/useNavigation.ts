import { useParams, usePathname, useRouter } from 'next/navigation';
import { Hash } from '../../../utils/types';
import { useRef } from 'react';

export function useNavigation() {
    const router = useRouter();
    const { lang } = useParams();
    const pathname = usePathname();
    const pathWithoutLang = pathname.length > 3 ? pathname.substring(3) : undefined;
    function handleHashNavigation(hash: Hash) {
        const path = pathWithoutLang ? `/${lang}/${hash}` : hash;
        console.log(path);
        return router.push(path);
    }

    return {
        pathWithoutLang,
        handleHashNavigation,
    };
}
