'use client';

import Button from '../../button';
import ResourceCard from '../../resource-card';

const resources = [
    {
        title: 'Safer, faster floor care on tough surfaces',
        description: 'Teams now handle the toughest flooring types safely and quickly, with no resistance.',
        imageSrc: '/sections/resources/frame03121.png',
        imageAlt: 'Floor cleaning machine in action',
        buttonText: 'Read the case study',
    },
    {
        title: 'Training videos and quick guides',
        description: 'Short how-to videos, maintenance tips, and staff-friendly guides.',
        imageSrc: '/sections/resources/hands-laptop.jpg',
        imageAlt: 'Training materials',
        buttonText: 'Open the training hub',
    },
    {
        title: 'ROI calculator',
        description: 'Show savings and time wins in minutes, ready for your next bid.',
        imageSrc: '/sections/resources/bluebusinessgraph.avif',
        imageAlt: 'ROI calculator dashboard',
        buttonText: 'Use the calculator',
    },
    {
        title: 'Tender template',
        description: 'Plug in your site details, submit with proof from real jobs.',
        imageSrc: '/sections/resources/signing-the-documents.jpg',
        imageAlt: 'Tender template documents',
        buttonText: 'Download template',
    },
];

const ResourcesSection = () => {
    return (
        <section className="relative">
            <div className="bg-pure-white pt-8 lg:pt-12 pb-16 lg:pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-left mb-6 lg:mb-8">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4">
                            <span className="text-green-blue">Explore Our</span> <br />
                            <span className="text-night">Persona-Specific Case Studies &</span> <br />
                            <span className="text-green-blue">Comprehensive Resources</span>
                        </h2>
                    </div>

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
                    <div className="flex justify-center pt-24 lg:pt-32">
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

