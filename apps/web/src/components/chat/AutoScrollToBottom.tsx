import React, { PropsWithChildren, useEffect, useRef } from 'react';

export function AutoScrollToBottom({ children }: PropsWithChildren<{}>) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToBottom();
    }, [children]);

    const scrollToBottom = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {children}
            <div ref={ref} />
        </div>
    );
}
