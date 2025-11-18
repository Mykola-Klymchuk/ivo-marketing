'use client';

import { Star } from 'lucide-react'
import clsx from 'clsx';

interface TestimonialCardProps {
    rating: number;
    text: string;
    author: string;
    variant?: 'default' | 'customer';
}

const TestimonialCard = ({
    rating,
    text,
    author,
    variant = 'default'
}: TestimonialCardProps) => {

    const authorParts = author.split(',').map(part => part.trim());
    const authorName = authorParts[0];
    const authorTitle = authorParts.slice(1).join(', ');

    const displayText = variant === 'customer' ? `"${text}"` : text;

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
            
            <p className={clsx(
                "text-pure-white mb-4 leading-relaxed italic",
                variant === 'customer' 
                    ? 'text-lg lg:text-xl font-bold' 
                    : 'text-xs lg:text-sm'
            )}>
                {displayText}
            </p>
            
            {variant === 'customer' ? (
                <div className="text-pure-white font-normal text-[11px] lg:text-xs italic">
                    <p>{authorName},</p>
                    <p>{authorTitle}</p>
                </div>
            ) : (
                <p className="text-pure-white font-bold text-[11px] lg:text-xs italic">
                    {author}
                </p>
            )}
        </article>
    );
};

export default TestimonialCard;

