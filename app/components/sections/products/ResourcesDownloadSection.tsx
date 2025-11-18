'use client';

import Badge from '../../badge';
import BlogPostCard from '../../blog-post-card';
import { blogPosts } from '../../../data/products';

const ResourcesDownloadSection = () => {
    return (
        <section className="bg-night text-pure-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 lg:pt-12 pb-16 lg:pb-24">
                <div className="text-center mb-8 lg:mb-12">
                    <div className="flex justify-center mb-6">
                        <Badge text="Resources" />
                    </div>
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 max-w-4xl mx-auto">
                        <span className="text-pure-white">Download </span>
                        <span className="bg-gradient-to-r from-green-blue to-picton-blue bg-clip-text text-transparent">Valuable Resources</span>
                    </h1>
                    <p className="text-pure-white text-base lg:text-lg max-w-4xl mx-auto mb-8">
                    Access essential tools for efficient cleaning operations.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogPostCard
                            key={index}
                            title={post.title}
                            description={post.description}
                            imageSrc={post.imageSrc}
                            imageAlt={post.imageAlt}
                            authorName={post.authorName}
                            authorAvatar={post.authorAvatar}
                            date={post.date}
                            readTime={post.readTime}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ResourcesDownloadSection;