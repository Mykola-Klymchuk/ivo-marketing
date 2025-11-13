'use client';

import { Star } from 'lucide-react';

interface TestimonialCardProps {
    rating: number;
    text: string;
    author: string;
}

const TestimonialCard = ({
    rating,
    text,
    author
}: TestimonialCardProps) => {
    return (
        <article className="bg-night border-2 border-picton-blue rounded-3xl p-4 lg:p-6">
            <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        className={`w-5 h-5 ${
                            index < rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-none text-night'
                        }`}
                    />
                ))}
            </div>
            
            <p className="text-pure-white text-xs lg:text-sm mb-4 leading-relaxed italic">
                {text}
            </p>
            
            <p className="text-pure-white font-bold text-[11px] lg:text-xs italic">
                {author}
            </p>
        </article>
    );
};

export default TestimonialCard;

