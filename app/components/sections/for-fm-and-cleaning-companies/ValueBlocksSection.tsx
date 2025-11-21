'use client';

import ResourceCard from '../../resource-card';
import { valueBlocks } from '../../../data/for-fm-and-cleaning-companies';

const ValueBlocksSection = () => {
    return (
        <section className="bg-night text-pure-white py-10 lg:py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {valueBlocks.map((block) => (
                        <ResourceCard
                            key={block.title}
                            title={block.title}
                            description={block.description}
                            imageSrc={block.imageSrc}
                            imageAlt={block.imageAlt}
                            buttonText={block.buttonText}
                            onButtonClick={() => {}}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueBlocksSection;

