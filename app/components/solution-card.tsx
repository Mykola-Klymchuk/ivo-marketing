'use client';

import Image from 'next/image';
import clsx from 'clsx';

type SolutionVariant = 'blue' | 'orange' | 'teal' | 'green';

interface SolutionCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    variant?: SolutionVariant;
}

const variantMap: Record<SolutionVariant, string> = {
    blue: 'bg-blue',
    orange: 'bg-orange',
    teal: 'bg-teal',
    green: 'bg-green',  
};

const SolutionCard = ({
    title,
    description,
    imageSrc,
    imageAlt,
    variant = 'blue',
}: SolutionCardProps) => {
    return (
        <article className="flex flex-col h-full text-center gap-4 max-w-[260px] w-full mx-auto">
            <div className={clsx('rounded-[36px] border border-night/40 overflow-hidden flex flex-col h-[340px]', variantMap[variant])}>
                <div className="relative h-[260px] rounded-[36px] overflow-visible bg-night">
                    <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover rounded-[36px] shadow-[0_2px_6px_rgba(0,0,0,0.75)]"
                    />
                </div>
                <span className={clsx(
                        'flex flex-1 items-center justify-center px-6 text-pure-white font-bold text-lg text-center',
                        variantMap[variant],
                    )}>
                        {title}
                </span>
            </div>

            <p className="text-sm lg:text-base text-pure-white/85">
                {description}
            </p>
        </article>
    );
};

export default SolutionCard;

