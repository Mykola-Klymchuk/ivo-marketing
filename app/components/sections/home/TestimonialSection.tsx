'use client';

import Image from 'next/image';
import Button from '../../button';
import Badge from '../../badge';
import TestimonialCard from '../../testimonial-card';

const testimonials = [
    {
        rating: 5,
        text: "We've replaced our old scrubbing machine with the RovaWash and the difference is night and day. It cleans right up to the edges, dries instantly, and our reception floors have never looked better. Guests notice – and comment.",
        author: 'Facilities Manager, 4-Star Hotel',
    },
    {
        rating: 5,
        text: "We just couldn't get our stair floors to look clean. After one demo with the PowerBrush XL 2.0, the grime was gone in minutes – and my team actually enjoyed using it.",
        author: 'Facilities Manager, NHS Trust',
    },
    {
        rating: 5,
        text: "We needed a machine that could handle deep cleans without shutting down the area for hours. The OrbiMax not only got our floors spotless but left them dry in minutes. It's now our go-to for every term break.",
        author: 'Site Supervisor, Secondary School',
    },
];

const TestimonialSection = () => {
    return (
        <section className="bg-night py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16 lg:mb-20">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Badge text="Access" />
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6">
                            <span className="text-pure-white">Your Trusted Partner</span> <br />
                            <span className="bg-gradient-to-r from-green-blue to-picton-blue bg-clip-text text-transparent">in Cleaning Solutions</span>
                        </h2>
                        
                        <p className="text-pure-white text-base lg:text-lg mb-8 leading-relaxed">
                            At iVO, we empower distributors and FM teams with cutting-edge cleaning technologies designed for efficiency and effectiveness. Our commitment to innovation ensures that you have the tools you need to succeed in a competitive market.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <Button
                                variant="outlined-white"
                                onClick={() => {}}
                            >
                                Learn More
                            </Button>
                            <Button
                                variant="solid-white"
                                icon={true}
                                onClick={() => {}}
                            >
                                Testimonials
                            </Button>
                        </div>
                    </div>
                    
                    <div className="flex-1">
                        <div className="relative w-full h-64 lg:h-80 rounded-3xl overflow-hidden mt-12 lg:mt-14">
                            <Image
                                src="/sections/testimonial/teamwork-image.jpg"
                                alt="Business meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            rating={testimonial.rating}
                            text={testimonial.text}
                            author={testimonial.author}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

