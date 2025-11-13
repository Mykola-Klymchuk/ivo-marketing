'use client';

import { useState } from 'react';
import ProductCard from '../../product-card';
import Button from '../../button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
    {
        name: 'iVO OrbiMax 55',
        image: '/sections/machines/_BC_5685 copy.png',
        imageAlt: 'iVO OrbiMax 55 floor cleaning machine',
        imageScale: 1.8,
        imageTranslateY: '-40%',
        imageObjectPosition: 'center -55%',
    },
    {
        name: 'iVO OrbiMax 40',
        image: '/sections/machines/_BC_5676 copy.png',
        imageAlt: 'PowerBrush XL 2.0 handheld scrubbing machine',
        imageScale: 1.8,
        imageTranslateY: '-40%',
        imageObjectPosition: 'center -55%',
    },
    {
        name: 'iVO OrbiMax 30',
        image: '/sections/machines/_BC_5643 copy.png',
        imageAlt: 'iVO RovaWash 450 upright floor cleaning machine',
        imageScale: 1.8,
        imageTranslateY: '-40%',
        imageObjectPosition: 'center -55%',
    },
    {
        name: 'iVO Machine 7',
        image: '/sections/machines/_BC_5549 copy.png',
        imageAlt: 'iVO cleaning machine',
        imageScale: 1.65,
        imageTranslateY: '-35%',
        imageObjectPosition: 'center -55%',
    },
];

const MachinesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerView = 3;

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? Math.ceil(products.length / productsPerView) - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === Math.ceil(products.length / productsPerView) - 1 ? 0 : prev + 1));
    };

    const visibleProducts = products.slice(currentIndex * productsPerView, currentIndex * productsPerView + productsPerView);

    return (
        <section className="relative bg-pure-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-8 lg:pb-12">
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4">
                        <span className="text-green-blue">Discover Our </span> <br />
                        <span className="text-night">Innovative Machines</span> <br />
                        <span className="text-green-blue">Tailored for Every Cleaning Professional</span>
                    </h1>
                </div>

                <div className="relative mb-12 px-8 lg:px-16">
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 lg:-translate-x-16 z-10 flex items-center justify-center hover:opacity-70 transition-opacity"
                        aria-label="Previous product"
                    >
                        <ChevronLeft className="w-12 h-12 lg:w-14 lg:h-14 text-night" strokeWidth={1} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 lg:translate-x-16 z-10 flex items-center justify-center hover:opacity-70 transition-opacity"
                        aria-label="Next product"
                    >
                        <ChevronRight className="w-12 h-12 lg:w-14 lg:h-14 text-night" strokeWidth={1} />
                    </button>

                    <div className="overflow-visible">
                        <div className="flex gap-6 lg:gap-8 justify-center py-6">
                            {visibleProducts.map((product, index) => (
                                <div 
                                    key={`${product.name}-${index}`}
                                    className="flex-shrink-0 w-full max-w-sm"
                                >
                                    <ProductCard
                                        productName={product.name}
                                        productImage={product.image}
                                        productImageAlt={product.imageAlt}
                                        onLearnMore={() => {}}
                                        onPlay={() => {}}
                                        imageScale={product.imageScale}
                                        imageTranslateY={product.imageTranslateY}
                                        imageObjectPosition={product.imageObjectPosition}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Button 
                        variant="outlined-blue" 
                        icon={true}
                        onClick={() => {}}
                    >
                        Explore All Machines
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default MachinesSection;