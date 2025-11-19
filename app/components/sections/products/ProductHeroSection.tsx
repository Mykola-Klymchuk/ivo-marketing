'use client';

import Image from 'next/image';
import Button from '../../button';

const ProductHeroSection = () => {
    return (
        <section className="bg-night text-pure-white">
            <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 pt-12 lg:pt-16 pb-10 lg:pb-16 flex flex-col items-center text-center gap-8">
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="flex flex-col items-center text-center gap-1">
                        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                            <span className="block text-pure-white">Cleaning Machines Built for</span>
                            <span className="block bg-gradient-to-r from-green-blue to-picton-blue bg-clip-text text-transparent">
                                Better, Faster, Safer, Greener Results
                            </span>
                        </h1>

                        <p className="text-base lg:text-lg text-pure-white/80 max-w-3xl">
                            Easy to implement, loved by workers, and powerful for tender wins.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button variant="solid-white" onClick={() => {}}>
                            Learn more
                        </Button>
                        <Button variant="outlined-white" icon={true} onClick={() => {}}>
                            Explore
                        </Button>
                    </div>
                </div>

                <div className="w-full">
                    <div className="relative h-96 lg:h-112 rounded-3xl overflow-hidden bg-night/40 border border-night/30">
                        <Image
                            src="/hero/frame00251.png"
                            alt="iVO cleaning machine in action"
                            width={1280}
                            height={720}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHeroSection;

