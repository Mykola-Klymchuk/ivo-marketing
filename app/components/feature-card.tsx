'use client';

import Image from 'next/image';
import Button from './button';
import clsx from 'clsx';

type FeatureVariant = 'blue' | 'teal' | 'green' | 'orange';

interface FeatureCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    buttonText: string;
    variant?: FeatureVariant;
    onButtonClick?: () => void;
}

const variantStyles: Record<FeatureVariant, {
    accent: string;
    accentHover: string;
    textAccent: string;
    borderColor: string;
    glow: string;
    glowHover: string;
}> = {
    blue: {
        accent: 'bg-blue',
        accentHover: 'group-hover:bg-blue/90',
        textAccent: 'text-blue',
        borderColor: 'border-blue/50',
        glow: 'shadow-[0_0_20px_rgba(1,96,148,0.4)]',
        glowHover: 'hover:shadow-[0_0_35px_rgba(1,96,148,0.7)]',
    },
    teal: {
        accent: 'bg-teal',
        accentHover: 'group-hover:bg-teal/90',
        textAccent: 'text-teal',
        borderColor: 'border-teal/50',
        glow: 'shadow-[0_0_20px_rgba(26,177,168,0.4)]',
        glowHover: 'hover:shadow-[0_0_35px_rgba(26,177,168,0.7)]',
    },
    green: {
        accent: 'bg-green',
        accentHover: 'group-hover:bg-green/90',
        textAccent: 'text-green',
        borderColor: 'border-green/50',
        glow: 'shadow-[0_0_20px_rgba(43,181,101,0.4)]',
        glowHover: 'hover:shadow-[0_0_35px_rgba(43,181,101,0.7)]',
    },
    orange: {
        accent: 'bg-orange',
        accentHover: 'group-hover:bg-orange/90',
        textAccent: 'text-orange',
        borderColor: 'border-orange/50',
        glow: 'shadow-[0_0_20px_rgba(255,131,20,0.4)]',
        glowHover: 'hover:shadow-[0_0_35px_rgba(255,131,20,0.7)]',
    },
};

const FeatureCard = ({
    title,
    description,
    imageSrc,
    imageAlt,
    buttonText,
    variant = 'blue',
    onButtonClick,
}: FeatureCardProps) => {
    const styles = variantStyles[variant];

    return (
        <article 
            className={clsx(
                'group relative bg-pure-white rounded-3xl overflow-hidden',
                'transition-all duration-300 hover:-translate-y-1',
                'shadow-[0_4px_20px_rgba(0,0,0,0.12)]',
                styles.glow,
                styles.glowHover
            )}
        >
            <div className={clsx(
                'absolute left-0 top-0 bottom-0 w-1.5',
                styles.accent,
                styles.accentHover,
                'transition-colors duration-300'
            )} />

            <div className={clsx(
                'absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent',
                'opacity-0 group-hover:opacity-5 transition-opacity duration-300',
                'pointer-events-none',
                styles.accent
            )} />

            <div className="flex flex-col h-full relative z-10">
                <div className="relative h-40 lg:h-48 overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pure-white/0 via-pure-white/0 to-pure-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <h3 className={clsx(
                        'text-xl lg:text-2xl font-extrabold mb-3 leading-tight',
                        'text-night group-hover:' + styles.textAccent,
                        'transition-colors duration-300'
                    )}>
                        {title}
                    </h3>

                    <p className="text-night/70 text-sm lg:text-base mb-6 leading-relaxed flex-1">
                        {description}
                    </p>

                    <Button
                        variant="text-link"
                        onClick={onButtonClick}
                        className={styles.textAccent}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default FeatureCard;
