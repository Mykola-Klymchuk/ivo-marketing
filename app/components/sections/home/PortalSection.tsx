'use client';

import Image from 'next/image';
import Badge from '../../badge';
import PortalCard from '../../portal-card';
import Button from '../../button';

const PortalSection = () => {
    return (
        <section className="bg-green-blue pt-40 lg:pt-48 pb-24 lg:pb-32 -mt-40 lg:-mt-48">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Badge text="Access" />
                        </div>
                        
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6">
                            <span className="text-pure-white">Streamlined</span> <br />
                            <span className="text-night">After-Sales & Training</span> <br />
                            <span className="text-pure-white">Portal</span>
                        </h1>
                        
                        <p className="text-pure-white text-base lg:text-lg mb-8">
                            Our After-Sales & Training Portal is designed to provide seamless access to essential resources. Log in to find tailored support and training materials that enhance your experience.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <PortalCard
                                imageSrc="/sections/portal/dynamic_safety_stock.webp"
                                imageAlt="Distributor warehouse"
                                title="Distributor Login"
                                description="Access exclusive resources and support tailored for distributors."
                                onClick={() => {}}
                            />

                            <PortalCard
                                imageSrc="/sections/portal/man-blueshirt.avif"
                                imageAlt="FM portal"
                                title="FM Login"
                                description="Unified portal for Operations and Sales teams to enhance efficiency."
                                onClick={() => {}}
                            />
                        </div>

                        <div className="flex gap-2">
                            <Button
                                variant="outlined-white"
                                onClick={() => {}}
                            >
                                Login
                            </Button>
                            <Button
                                variant="solid-white"
                                onClick={() => {}}
                            >
                                Access
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 lg:max-w-lg mt-8 lg:mt-16">
                        <div className="relative w-full h-[480px] lg:h-[580px] rounded-3xl overflow-hidden">
                            <Image
                                src="/sections/portal/teamwork-image.jpg"
                                alt="Team collaboration"
                                fill
                                className="object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortalSection;

