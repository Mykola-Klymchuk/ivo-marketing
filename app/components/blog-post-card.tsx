'use client';

import Image from 'next/image';

interface BlogPostCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    authorName: string;
    authorAvatar: string;
    date: string;
    readTime: string;
}

const BlogPostCard = ({
    title,
    description,
    imageSrc,
    imageAlt,
    authorName,
    authorAvatar,
    date,
    readTime,
}: BlogPostCardProps) => {
    return (
        <article className="bg-pure-white rounded-3xl overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.75),0_0_20px_rgba(0,0,0,0.25)] border border-anti-flash-white flex flex-col">
            <div className="px-4 pt-4">
                <div className="relative w-full h-48 rounded-3xl overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="p-4 pb-3 flex-1">
                <h3 className="text-green-blue text-lg font-bold mb-1">
                    {title}
                </h3>
                <p className="text-night/70 text-sm">
                    {description}
                </p>
            </div>
            <div className="px-4 pb-4 pt-0 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src={authorAvatar}
                        alt={authorName}
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-night font-bold text-sm truncate">
                        {authorName}
                    </p>
                    <p className="text-night/70 text-xs">
                        {date} · {readTime}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default BlogPostCard;

