'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Button from './button';

interface ResourceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    buttonText: string;
    onButtonClick?: () => void;
    imageHeightClass?: string;
}

const ResourceCard = ({
    title,
    description,
    imageSrc,
    imageAlt,
    buttonText,
    onButtonClick,
    imageHeightClass = 'h-32'
}: ResourceCardProps) => {
    return (
        <article className="bg-pure-white rounded-3xl overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.75),0_0_20px_rgba(0,0,0,0.25)] border border-anti-flash-white">
            <div className="p-6 pb-4">
                <h3 className="text-green-blue text-lg font-bold mb-1">
                    {title}
                </h3>
                <p className="text-night/70 text-sm">
                    {description}
                </p>
            </div>
            <div className="px-6 pb-6 pt-0">
                <div className={clsx("relative w-full rounded-3xl overflow-hidden", imageHeightClass)}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4">
                        <Button
                            variant="solid-white"
                            onClick={onButtonClick}
                            className="text-sm"
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ResourceCard;

