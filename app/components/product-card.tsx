'use client';

import Image from 'next/image';
import Button from './button';

interface ProductCardProps {
    productName: string;
    productImage: string;
    productImageAlt: string;
    onLearnMore?: () => void;
    onPlay?: () => void;
    imageScale?: number;
    imageTranslateY?: string;
    imageObjectPosition?: string;
}

const ProductCard = ({ 
    productName, 
    productImage, 
    productImageAlt,
    onLearnMore,
    onPlay,
    imageScale = 1.8,
    imageTranslateY = '-40%',
    imageObjectPosition = 'center -55%'
}: ProductCardProps) => {
    return (
        <article 
            className="relative bg-night rounded-3xl overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.75),0_0_20px_rgba(0,0,0,0.25)]"
            style={{
                backgroundImage: 'url(/hero/Overlay.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="p-6 lg:p-8 pb-4">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-picton-blue" />
                    <h3 className="text-pure-white text-lg lg:text-xl font-bold">
                        {productName}
                    </h3>
                </div>
                
                <Button 
                    variant="solid-white" 
                    onClick={onLearnMore}
                    className="text-sm"
                >
                    Learn more
                </Button>
            </div>
            
            <div className="relative w-full h-80 lg:h-96" style={{ paddingTop: '20%', marginTop: '-20%' }}>
                <div className="relative w-full h-full">
                    <Image
                        src={productImage}
                        alt={productImageAlt}
                        fill
                        className="object-contain"
                        style={{ 
                            objectPosition: imageObjectPosition,
                            transform: `scale(${imageScale}) translateY(${imageTranslateY})`,
                            transformOrigin: 'center 0%'
                        }}
                    />
                </div>
                <button
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
                    />
                </button>
            </div>
        </article>
    );
};

export default ProductCard;

