'use client';

import Image from 'next/image';
import Button from '../../button';
import Badge from '../../badge';

const images = [
    'frame00171.png',
    'frame00481.png',
    'frame00571.png',
    'frame00881.png',
    'frame00951.png',
    'frame01071.png',
    'frame01521.png',
    'frame01731.png',
    'frame01851.png',
    'frame02481.png',
    'frame02791.png',
    'frame03041.png',
];

const imageHeight = { mobile: 'h-32', desktop: 'lg:h-44' };

const EmpowerSection = () => {
    return (
        <section className="bg-night text-pure-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 lg:pt-12 pb-16 lg:pb-24">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <Badge text="Innovation" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 max-w-4xl mx-auto">
                        <span className="text-pure-white">Empowering Your </span> <br />
                        <span className="bg-gradient-to-r from-green-blue to-picton-blue bg-clip-text text-transparent">Cleaning Solutions for Success</span>
                    </h2>
                    <p className="text-pure-white text-base lg:text-lg max-w-4xl mx-auto mb-8">
                        Our commitment to being <span className="font-bold text-picton-blue"><i>Better, Faster, Safer, and Greener</i></span> drives everything we do. Discover how our innovative solutions can transform your operations.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Button variant="solid-white" onClick={() => {}}>
                            Learn more
                        </Button>
                        <Button 
                            variant="outlined-white" 
                            onClick={() => {}}
                            icon={true}
                        >
                            Explore
                        </Button>
                    </div>
                </div>

            </div>

            <div className="relative -mx-6 lg:-mx-8 bg-grid-bg py-1 mb-10 lg:py-2 overflow-x-hidden">
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-night via-night/95 via-night/70 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-night via-night/95 via-night/70 to-transparent pointer-events-none z-10" />
                
                <div className="animate-scroll-slow flex gap-0.5 lg:gap-1" style={{ width: 'max-content' }}>
                    {[...images, ...images, ...images].reduce((acc: any[], image: string, index: number) => {
                        const blockIndex = Math.floor(index / 7);
                        const positionInBlock = index % 7;
                        
                        if (positionInBlock === 0) {
                            acc.push([]);
                        }
                        
                        acc[blockIndex].push({ image, index, positionInBlock });
                        
                        return acc;
                    }, []).map((block, blockIndex) => (
                        <div 
                            key={`block-${blockIndex}`}
                            className="grid grid-cols-4 gap-0.5 lg:gap-1 flex-shrink-0"
                            style={{ width: '100vw' }}
                        >
                            {block.slice(0, 4).map(({ image, index }: any) => {
                                return (
                                    <div
                                        key={`${image}-${index}`}
                                        className={`relative ${imageHeight.mobile} ${imageHeight.desktop} rounded overflow-hidden border border-night/10`}
                                    >
                                        <Image
                                            src={`/sections/empover-section/${image}`}
                                            alt={`Cleaning equipment ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                );
                            })}
                            
                            {block.slice(4, 7).map(({ image, index, positionInBlock }: any) => {
                                const isWide = positionInBlock === 5;
                                
                                return (
                                    <div
                                        key={`${image}-${index}`}
                                        className={`relative ${isWide ? 'col-span-2' : ''} ${imageHeight.mobile} ${imageHeight.desktop} rounded overflow-hidden border border-night/10`}
                                    >
                                        <Image
                                            src={`/sections/empover-section/${image}`}
                                            alt={`Cleaning equipment ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="h-12 bg-gradient-to-t from-green-blue via-green-blue/70 to-transparent" />
        </section>
    )
}

export default EmpowerSection;