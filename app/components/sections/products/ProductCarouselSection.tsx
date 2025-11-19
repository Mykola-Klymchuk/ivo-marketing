'use client';

import ProductCard from '../../product-card';
import Button from '../../button';
import { productShowcase } from '../../../data/products';

const ProductCarouselSection = () => {
    return (
        <section className="bg-pure-white text-night">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
                <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-3">
                        <span className="text-green-blue">Discover Our</span> <br />
                        <span className="text-night">Innovative Products</span>
                    </h1>
                    <p className="text-base lg:text-lg text-night/80">
                        Top-performing machines for effective cleaning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                    {productShowcase.map((product) => (
                        <div key={product.title} className="h-full">
                            <ProductCard
                                variant="expanded"
                                title={product.title}
                                images={product.images}
                                imageAlt={product.imageAlt}
                                badges={['better', 'faster', 'safer', 'greener']}
                                onPlay={() => {}}
                                onPurchase={() => {}}
                                onDemo={() => {}}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Button variant="outlined-blue" icon={true} onClick={() => {}}>
                        View All Machines
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProductCarouselSection;

