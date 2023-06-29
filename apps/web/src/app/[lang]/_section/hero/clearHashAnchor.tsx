'use client';

import React, { useEffect, useRef } from 'react';

export function ClearHashAnchor() {
    const ref = useRef<HTMLDivElement>(null);

    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
            const { protocol, host, pathname, search } = window.location;
            window.history.replaceState({}, document.title, `${protocol}//${host}${pathname}${search}`);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleVisibility);
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return <div ref={ref} />;
}
