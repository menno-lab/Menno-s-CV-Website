'use client';

import React, { PropsWithChildren } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Link } from '@chakra-ui/react';
import { useNavigation } from '../hooks/useNavigation';
import { Hash } from '../../../utils/types';

interface HashLinkProps {
    href: Hash;
}

export function HashLink({ href, children }: PropsWithChildren<HashLinkProps>) {
    const router = useRouter();
    const { lang } = useParams();
    const { pathWithoutLang } = useNavigation();

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
