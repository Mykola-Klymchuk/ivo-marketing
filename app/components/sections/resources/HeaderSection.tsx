'use client';

import Image from 'next/image';

const HeaderSection = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/sections/testimonial/teamwork-image.jpg"
                    alt="Professional cleaning equipment and innovation"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-4/7 bg-gradient-to-t from-night via-night/90 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-end pb-16 lg:pb-24">
                <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12">
                    <div className="flex flex-col gap-2 max-w-6xl lg:max-w-7xl">
                        <h1 className="text-picton-blue text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight whitespace-nowrap">
                            Expert Resources Tailored to Your Needs
                        </h1>
                        <p className="text-pure-white text-base lg:text-xl leading-relaxed max-w-2xl">
                            Access guides, templates, and tools designed for distributors, operations teams, and sales teams.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;