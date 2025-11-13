'use client';

import Image from 'next/image';
import Button from './button';

interface RoleCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    buttonText: string;
    buttonVariant?: 'outlined-blue' | 'solid-white' | 'outlined-white' | 'solid-blue-inverse' | 'chat-button' | 'outlined-badge-blue';
    imageScale?: string;
    onClick?: () => void;
}

const RoleCard = ({ 
    imageSrc, 
    imageAlt, 
    title, 
    buttonText, 
    buttonVariant = 'outlined-blue',    
    imageScale,
    onClick 
}: RoleCardProps) => {
    return (
        <article className="bg-night rounded-t-3xl overflow-hidden">
            <div className="relative w-full h-80 lg:h-96">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className={`object-cover ${imageScale || ''}`}
                    loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-night via-night/80 to-transparent pointer-events-none" />
                <div className="absolute -bottom-8 left-0 right-0 px-6 lg:px-8 text-center">
                    <h3 className="text-pure-white text-xl lg:text-2xl font-bold mb-4">
                        {title}
                    </h3>
                </div>
            </div>
            <div className="p-6 lg:p-8 pt-0 text-center">
                <Button 
                    variant={buttonVariant} 
                    onClick={onClick}
                >
                    {buttonText}
                </Button>
            </div>
        </article>
    );
};

export default RoleCard;

