'use client';

import React, { PropsWithChildren } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Link } from '@chakra-ui/react';

interface HashLinkProps {
    href: string;
}

export function HashLink({ href, children }: PropsWithChildren<HashLinkProps>) {
    const router = useRouter();
    const { lang } = useParams();
    const pathname = usePathname();
    const pathWithoutLang = pathname.replace(`/${lang}`, '');

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (pathWithoutLang) {
            e.preventDefault();
            router.push(`/${lang}/#${href}`);
        }
    };

    return (
        <Link href={`#${href}`} onClick={handleClick} fontWeight={600}>
            {children}
        </Link>
    );
}
