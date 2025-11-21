'use client';

import RoleCard from '../../role-card';

const SplitHeroSection = () => {
    return (
        <section className="bg-night text-pure-white pt-12 lg:pt-16 pb-12 lg:pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <RoleCard
                        imageSrc="/sections/solutions-highlight/20240424_111515.jpg"
                        imageAlt="Working with cleaning equipment"
                        title="Get the Work Done – Easy-to-Use Tech, Less Training, Fewer Errors"
                        buttonText="Explore Operations Tools"
                        buttonVariant="outlined-badge-blue"
                        onClick={() => {}}
                    />
                    <RoleCard
                        imageSrc="/sections/operational-use-cases/meeting-image.png"
                        imageAlt="Business partnership and sales success"
                        title="Win More Tenders – Proven Cleaning Outcomes, Better ROI"
                        buttonText="Access Sales Toolkit"
                        buttonVariant="outlined-badge-blue"
                        onClick={() => {}}
                    />
                </div>
            </div>
        </section>
    );
};

export default SplitHeroSection;

