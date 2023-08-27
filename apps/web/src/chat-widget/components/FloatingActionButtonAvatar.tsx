import { motion } from 'framer-motion';
import React from 'react';
import { Avatar, CloseIcon, ChatIcon, AvatarBadge } from 'ui';

interface FloatingActionButtonAvatarProps {
    isOpen: boolean;
    onToggle: () => void;
}

export function FloatingActionButtonAvatar({ isOpen, onToggle }: FloatingActionButtonAvatarProps) {
    return (
        <Avatar
            aria-label='Open chat'
            icon={
                isOpen ? (
                    <motion.div
                        animate={{
                            rotate: 180,
                        }}
                    >
                        <CloseIcon fontSize='lg' textColor='white' mt='-6px' />
                    </motion.div>
                ) : (
                    <ChatIcon fontSize='2xl' textColor='white' />
                )
            }
            size='lg'
            boxShadow='2xl'
            cursor='pointer'
            onClick={onToggle}
            bg='secondary.500'
        >
            <AvatarBadge bg='green' boxSize='20px' borderWidth='2px' />
        </Avatar>
    );
}
