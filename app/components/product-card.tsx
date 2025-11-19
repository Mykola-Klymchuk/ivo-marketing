'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './button';
import Badge from './badge';

type BadgeType = 'better' | 'faster' | 'safer' | 'greener';
type ProductCardVariant = 'basic' | 'expanded';

interface ProductCardProps {
    variant: ProductCardVariant;
    title: string;
    images: string[];
    imageAlt: string;
    badges?: BadgeType[];
    onLearnMore?: () => void;
    onPlay?: () => void;
    onPurchase?: () => void;
    onDemo?: () => void;
}

const badgeLabels: Record<BadgeType, string> = {
    better: 'Better',
    faster: 'Faster',
    safer: 'Safer',
    greener: 'Greener',
};

const badgeVariantMap: Record<BadgeType, 'blue' | 'orange' | 'teal' | 'green'> = {
    better: 'blue',
    faster: 'orange',
    safer: 'teal',
    greener: 'green',
};

const ProductCard = ({ variant, title, images, imageAlt, badges = [], onLearnMore, onPlay, onPurchase, onDemo }: ProductCardProps) => {
    const gallery = useMemo(() => {
        if (images && images.length > 0) {
            return images;
        }

        return ['/hero/Overlay.png'];
    }, [images]);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const showCarouselControls = variant === 'expanded' && gallery.length > 1;
    const activeImage = gallery[currentImageIndex] ?? gallery[0];

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [gallery]);

    const handlePreviousImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    };

    const imageClickHandler = onPlay ?? onLearnMore ?? onPurchase ?? onDemo;
    
    return (
        <article
            className="relative flex flex-col w-full overflow-hidden rounded-3xl bg-night text-pure-white shadow-[0_4px_10px_rgba(0,0,0,0.75),0_0_20px_rgba(0,0,0,0.25)]"
            style={{
                backgroundImage: 'url(/hero/Overlay.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="p-4 lg:p-5 pb-2 space-y-3">
                <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-picton-blue mt-2" />
                    <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-semibold leading-tight">{title}</h3>
                        {variant === 'basic' ? (
                            <Button
                                variant="solid-white"
                                onClick={onLearnMore}
                                className="mt-2 text-xs lg:text-sm whitespace-nowrap"
                            >
                                Learn more
                            </Button>
                        ) : (
                            <button
                                type="button"
                                onClick={onPlay}
                                className="mt-1 text-xs lg:text-sm text-pure-white/80 underline underline-offset-4 hover:text-pure-white transition-colors cursor-pointer"
                            >
                                Watch product video
                            </button>
                        )}
                    </div>
                </div>

                {variant === 'expanded' && badges.length > 0 && (
                    <div className="inline-grid gap-x-0.5 gap-y-1 justify-items-start [grid-template-columns:max-content_max-content] pl-4">
                            {badges.map((badge) => (
                                <Badge
                                key={`${title}-${badge}`}
                                    text={badgeLabels[badge]}
                                    variant={badgeVariantMap[badge]}
                                    showIcon={false}
                                />
                            ))}
                        </div>
                    )}
            </div>

            <div className="relative px-1.5 lg:px-2 pb-1">
                <div className="relative w-full flex justify-center">
                    <img
                        src={activeImage}
                        alt={imageAlt}
                        className="w-full h-auto max-h-[420px] object-contain select-none"
                        loading="lazy"
                        onClick={imageClickHandler}
                    />
                </div>

                {showCarouselControls && (
                    <>
                        <button
                            type="button"
                            onClick={handlePreviousImage}
                            className="absolute left-1.5 md:left-3 top-1/2 -translate-y-1/2 w-14 h-14 text-pure-white flex items-center justify-center hover:scale-105 transition cursor-pointer"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-7 h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                        </button>
                        <button
                            type="button"
                            onClick={handleNextImage}
                            className="absolute right-1.5 md:right-3 top-1/2 -translate-y-1/2 w-14 h-14 text-pure-white flex items-center justify-center hover:scale-105 transition cursor-pointer"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-7 h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                        </button>
                    </>
                )}
            </div>

            <div className="px-4 lg:px-5 pb-4 mt-auto">
                {variant === 'basic' ? (
                    <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={onPlay}
                            className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                        aria-label="Play video"
                    >
                        <Image
                            src="/icons/view-icon.png"
                            alt="Play video"
                            width={40}
                            height={40}
                            className="w-10 h-10 brightness-0 invert"
                            loading="lazy"
                        />
                    </button>
                    </div>
                ) : (
                    <div className="flex justify-end gap-3">
                        <Button variant="solid-blue" onClick={onPurchase}>
                            Purchase
                        </Button>
                        <Button variant="solid-white" onClick={onDemo}>
                            Demo
                        </Button>
                    </div>
                )}
            </div>
        </article>
    );
};

export default ProductCard;

