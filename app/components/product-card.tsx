'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './button';
import Badge from './badge';

type BadgeType = 'better' | 'faster' | 'safer' | 'greener';
type ProductCardMode = 'button' | 'video';

interface ProductCardProps {
    productName: string;
    productImage: string;
    productImageAlt: string;
    onLearnMore?: () => void;
    onPlay?: () => void;
    onPurchase?: () => void;
    onDemo?: () => void;
    imageScale?: number;
    imageTranslateY?: string;
    imageObjectPosition?: string;
    imageHeightClass?: string;
    badges?: BadgeType[];
    ctaMode?: ProductCardMode;
    subtitle?: string;
    productImages?: string[];
    isCarousel?: boolean;
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

const ProductCard = ({
    productName,
    productImage,
    productImageAlt,
    onLearnMore,
    onPlay,
    onPurchase,
    onDemo,
    imageScale = 1.8,
    imageTranslateY = '-40%',
    imageObjectPosition = 'center -55%',
    imageHeightClass = 'h-80 lg:h-96',
    badges = [],
    ctaMode = 'button',
    subtitle = 'Watch product video',
    productImages,
    isCarousel = false,
}: ProductCardProps) => {
    const images = useMemo(() => {
        if (productImages && productImages.length > 0) {
            return productImages;
        }
        return [productImage];
    }, [productImage, productImages]);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [images]);

    const activeImage = images[currentImageIndex] ?? productImage;
    const showCarouselControls = isCarousel && images.length > 1;

    const handlePreviousImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <article
            className="relative bg-night rounded-3xl overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.75),0_0_20px_rgba(0,0,0,0.25)]"
            style={{
                backgroundImage: 'url(/hero/Overlay.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="p-6 lg:p-8 pb-4">
                <div className="flex items-start gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-picton-blue mt-2" />
                    <div className="flex-1 text-left">
                        <h3 className="text-pure-white text-lg lg:text-xl font-bold">{productName}</h3>
                        {ctaMode === 'video' && (
                            <button
                                type="button"
                                onClick={onPlay}
                                className="text-sm text-pure-white/80 underline underline-offset-4 hover:text-pure-white"
                            >
                                {subtitle}
                            </button>
                        )}
                    </div>
                </div>

                <div className="pl-5">
                    {ctaMode === 'button' ? (
                        <Button variant="solid-white" onClick={onLearnMore} className="text-sm">
                            Learn more
                        </Button>
                    ) : null}

                    {badges.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {badges.map((badge) => (
                                <Badge
                                    key={`${productName}-${badge}`}
                                    text={badgeLabels[badge]}
                                    variant={badgeVariantMap[badge]}
                                    showIcon={false}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div
                className={clsx('relative w-full', imageHeightClass)}
                style={{ paddingTop: '20%', marginTop: '-20%' }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src={activeImage}
                        alt={productImageAlt}
                        fill
                        className="object-contain"
                        loading="lazy"
                        style={{
                            objectPosition: imageObjectPosition,
                            transform: `scale(${imageScale}) translateY(${imageTranslateY})`,
                            transformOrigin: 'center 0%',
                        }}
                    />
                </div>

                {showCarouselControls && (
                    <>
                        <button
                            type="button"
                            onClick={handlePreviousImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-pure-white flex items-center justify-center hover:bg-black/60 transition"
                            aria-label="Попереднє зображення"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-pure-white flex items-center justify-center hover:bg-black/60 transition"
                            aria-label="Наступне зображення"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </>
                )}

                {ctaMode === 'button' ? (
                    <button
                        type="button"
                        onClick={onPlay}
                        className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity z-10"
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
                ) : (
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                        <button
                            type="button"
                            onClick={onPurchase}
                            className="px-4 py-1.5 rounded-full text-xs font-semibold text-pure-white bg-[var(--blue)] shadow-[0_4px_12px_rgba(0,0,0,0.35)] hover:opacity-90 transition"
                        >
                            Purchase
                        </button>
                        <button
                            type="button"
                            onClick={onDemo}
                            className="px-4 py-1.5 rounded-full text-xs font-semibold text-night bg-pure-white shadow-[0_4px_12px_rgba(0,0,0,0.35)] hover:bg-anti-flash-white transition"
                        >
                            Demo
                        </button>
                    </div>
                )}
            </div>
        </article>
    );
};

export default ProductCard;

