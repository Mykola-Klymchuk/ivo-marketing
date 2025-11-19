'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRightIcon } from 'lucide-react';

type ButtonVariant = 
'outlined-white' | 
'solid-white' |
'solid-blue' |
'outlined-blue' |
'outlined-badge-blue' |
'solid-blue-inverse' |
'chat-button';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    children: React.ReactNode;
    icon?: boolean;
    onClick?: () => void;
    className?: string;
}

const buttonVariants = {
    'outlined-white': 'border-pure-white bg-transparent hover:bg-pure-white hover:text-night',
    'solid-white': 'border-transparent bg-pure-white text-night hover:bg-transparent hover:text-pure-white hover:border-pure-white',
    'solid-blue': 'border-green-blue bg-green-blue text-pure-white hover:bg-transparent hover:text-green-blue',
    'outlined-blue': 'border-picton-blue bg-green-blue text-pure-white hover:bg-green-blue/90',
    'outlined-badge-blue': 'border-picton-blue bg-badge-blue text-pure-white hover:bg-badge-blue/90',
    'solid-blue-inverse': 'border-picton-blue bg-pure-white text-green-blue hover:bg-pure-white/90',
    'chat-button': 'border-picton-blue bg-night text-pure-white shadow-[0_0_15px_rgba(0,180,255,0.5)] hover:shadow-[0_0_20px_rgba(0,180,255,0.7)] hover:bg-night/90',
}

const baseClasses = 'inline-flex items-center justify-center gap-2 relative overflow-hidden rounded-full border-2 border-solid text-sm font-medium transition-all px-6 py-2 hover:cursor-pointer';

const Button: FC<ButtonProps> = ({children, variant = 'outlined-white', icon = false, onClick, className, ...props}) => {
    return (
        <button 
            className={cn(baseClasses, buttonVariants[variant], className)} 
            onClick={onClick}
            {...props}>
            {children}
            {icon && <ChevronRightIcon className="size-4 text-current" />}
        </button>
    )
}

export default Button;