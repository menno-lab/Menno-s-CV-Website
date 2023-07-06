'use client';

import React, { PropsWithChildren } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Link } from '@chakra-ui/react';
import { Hash } from '../../../utils/types';

interface HashLinkProps {
    href: Hash;
}

export function HashLink({ href, children }: PropsWithChildren<HashLinkProps>) {
    const router = useRouter();
    const { lang } = useParams();
    const pathname = usePathname();
    const pathWithoutLang = pathname.length > 3 ? pathname.substring(3) : undefined;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (pathWithoutLang) {
            e.preventDefault();
            router.push(`/${lang}/${href}`);
        }
    };

    return (
        <Link href={href} onClick={handleClick} fontWeight={600}>
            {children}
        </Link>
    );
}
