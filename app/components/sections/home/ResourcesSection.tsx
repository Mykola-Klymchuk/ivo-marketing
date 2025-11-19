'use client';

import Button from '../../button';
import ResourceCard from '../../resource-card';
import { resources } from '../../../data/home';

const ResourcesSection = () => {
    return (
        <section className="relative">
            <div className="bg-pure-white pt-8 lg:pt-12 pb-16 lg:pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h1 className="text-left text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 lg:mb-8">
                            <span className="text-green-blue">Explore Our</span> <br />
                            <span className="text-night">Persona-Specific Case Studies &</span> <br />
                            <span className="text-green-blue">Comprehensive Resources</span>
                        </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-1">
                        {resources.map((resource, index) => (
                            <ResourceCard
                                key={index}
                                title={resource.title}
                                description={resource.description}
                                imageSrc={resource.imageSrc}
                                imageAlt={resource.imageAlt}
                                buttonText={resource.buttonText}
                                onButtonClick={() => {}}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-green-blue pb-16 lg:pb-24 -mt-40 lg:-mt-48">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="pt-24 lg:pt-32 text-center">
                        <Button
                            variant="solid-blue-inverse"
                            onClick={() => {}}
                        >
                            Browse all
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;

