'use client';

import Image from 'next/image';
import EmailSubscription from '../../email-subscription';

const DemoRequestSection = () => {
    return (
        <section className="relative bg-green-blue text-pure-white overflow-hidden min-h-[560px]">
            <div className="absolute inset-y-0 right-0 w-[40%]">
                <Image
                    src="/hero/frame36591.png"
                    alt="Floor cleaning demonstration"
                    fill
                    className="object-cover object-bottom"
                    priority={false}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-6 py-4 lg:py-6 min-h-[560px] flex items-center lg:pr-[40%]">
                <div className="flex flex-col gap-6 text-center lg:text-left z-10 w-full max-w-4xl mx-auto lg:mx-0">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                            Request Your Personalized Demo
                        </h1>
                        <p className="text-base lg:text-lg text-pure-white/90 max-w-3xl mx-auto lg:mx-0">
                            Experience the future of floor cleaning technology tailored to your needs. Request a demo today!
                        </p>
                        <div className="max-w-lg mx-auto lg:mx-0">
                            <EmailSubscription
                                placeholder="Your Email Here"
                                buttonText="Request Demo"
                                disclaimerText="By clicking Request Demo, you agree to our Terms and Conditions."
                            />
                        </div>
                </div>
            </div>
        </section>
    );
};

export default DemoRequestSection;
