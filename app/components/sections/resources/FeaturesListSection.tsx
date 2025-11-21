'use client';

import FeatureCard from '../../feature-card';
import { features } from '../../../data/resources';

const FeaturesListSection = () => {
    return (
        <section className="bg-green-blue py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const variants: Array<'blue' | 'teal' | 'green' | 'orange'> = ['orange', 'teal', 'green'];
                        return (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                imageSrc={feature.imageSrc}
                                imageAlt={feature.imageAlt}
                                buttonText={feature.buttonText}
                                variant={variants[index]}
                                onButtonClick={() => {}}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesListSection;

