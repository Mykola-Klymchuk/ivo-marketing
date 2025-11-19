'use client';

import Button from '../../button';
import SolutionCard from '../../solution-card';
import { solutions } from '../../../data/products';

const SolutionsHighlightSection = () => {
    return (
        <section className="bg-night text-pure-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 flex flex-col items-center text-center gap-8">
                <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
                        <span className="text-pure-white">Discover Your</span>{' '}
                        <span className="block bg-gradient-to-r from-green-blue to-picton-blue bg-clip-text text-transparent">
                            Ideal Cleaning Solutions
                        </span>
                    </h1>
                    <p className="text-base lg:text-lg text-pure-white/80">
                        Our innovative filters help you find the right machines tailored to your needs. Choose options
                        that prioritize better, faster, safer, and greener cleaning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
                    {solutions.map((solution) => (
                        <SolutionCard key={solution.title} {...solution} />
                    ))}
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
        </section>
    );
};

export default SolutionsHighlightSection;

