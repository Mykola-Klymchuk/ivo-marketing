'use client';

import ResourceCard from '../../resource-card';
import { operationalUseCases } from '@/app/data/products';

const OperationalUseCasesSection = () => {
    return (
        <section className="relative overflow-hidden bg-pure-white">
            <div className="absolute inset-x-0 bottom-0 h-32 lg:h-44 bg-night z-10 pointer-events-none" />

            <div className="relative z-20 pt-6 lg:pt-8 pb-6 lg:pb-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-6 lg:mb-8">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4">
                            <span className="text-green-blue">Unlock Operational Efficiency with</span> <br />
                            <span className="text-night">Tailored Solutions for Every Cleaning Need</span> <br />
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-1">
                        {operationalUseCases.map((operationalUseCase, index) => (
                        <ResourceCard
                            key={index}
                            title={operationalUseCase.title}
                            description={operationalUseCase.description}
                            imageSrc={operationalUseCase.imageSrc}
                            imageAlt={operationalUseCase.imageAlt}
                            buttonText={operationalUseCase.buttonText}
                            onButtonClick={() => {}}
                            imageHeightClass="h-44 lg:h-52"
                        />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperationalUseCasesSection;

