'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '../../button';

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero/hero-background.jpg"
                    alt="Professional cleaning equipment and innovation"
                    fill
                    className="object-cover scale-110"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-4/7 bg-gradient-to-t from-night via-night/90 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-end pb-16 lg:pb-24">
                <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12">
                    <div className="flex flex-col gap-2 max-w-6xl lg:max-w-7xl">
                        <h1 className="text-picton-blue text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight whitespace-nowrap">
                            Practical Cleaning Innovation
                        </h1>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight whitespace-nowrap">
                            <span className="text-pure-white">for </span>
                            <span className="text-picton-blue">Cleaning Teams</span>
                        </h2>
                        <p className="text-pure-white text-base lg:text-xl leading-relaxed max-w-2xl">
                            Supercharge your operations with efficient equipment – and win more tenders with innovation that works.
                        </p>
 
                        <div className="flex items-center gap-4 mt-2">
                            <Link 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:opacity-75 transition-opacity"
                            >
                                <Image 
                                    src='/icons/linkedin-icon.png' 
                                    alt="Visit iVO on LinkedIn" 
                                    width={32} 
                                    height={32}
                                    className="w-8 h-8"
                                    loading="lazy"
                                />
                            </Link>
                            <Link 
                                href="https://youtube.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:opacity-75 transition-opacity"
                            >
                                <Image 
                                    src='/icons/yt-icon.png' 
                                    alt="Visit iVO on YouTube" 
                                    width={32} 
                                    height={32}
                                    className="w-8 h-8"
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>

                        <Button 
                            variant="chat-button" 
                            icon={false}
                            onClick={() => {}}
                        className="flex items-center gap-2 text-base lg:text-lg font-bold lg:self-end"
                        >
                            <Image src='/icons/ivologo-chat.png' alt="Chat" width={24} height={24} loading="lazy" />
                            Chat with us!
                        </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;