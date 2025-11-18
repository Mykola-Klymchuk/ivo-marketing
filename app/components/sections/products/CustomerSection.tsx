'use client';

import TestimonialCard from "../../testimonial-card";
import { customerTestimonials } from "@/app/data/products";

const CustomerSection = () => {
    return (
        <section className="bg-night pt-60 lg:pt-96 pb-24 lg:pb-32 -mt-40 lg:-mt-64">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <header className="text-center mb-6 lg:mb-8">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4">
                        <span className="text-pure-white">Customer</span> <br />
                        <span className="bg-gradient-to-r from-green-blue to-picton-blue bg-clip-text text-transparent">Testimonials</span>
                    </h1>
                    <p className="text-pure-white text-base lg:text-lg mb-8">Hear from our satisfied clients.</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-1">
                    {customerTestimonials.map((customerTestimonial, index) => (
                        <TestimonialCard
                            key={index}
                            rating={customerTestimonial.rating}
                            text={customerTestimonial.text}
                            author={customerTestimonial.author}
                            variant="customer"
                         />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerSection;

