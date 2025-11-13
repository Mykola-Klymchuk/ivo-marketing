'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '../button';
import { quickLinks, resources } from '../../data/navigation';

const Footer = () => {
    return (
        <footer className="bg-night text-pure-white">
            <div className="h-px bg-green-blue w-full" />
            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="flex justify-between gap-12">
                    <div className="flex flex-col gap-6 flex-1 max-w-md">
                        <div className="flex flex-col gap-4">
                            <Link href="/">
                                <Image src='/logo/iVO-logo.png' alt="SIVO Logo" width={120} height={40} />
                            </Link>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <p className="text-pure-white text-base">
                                Subscribe to our newsletter for the latest features and updates.
                            </p>
                            
                            <div className="flex items-center gap-2">
                                <input
                                    type="email"
                                    placeholder="Your Email Here"
                                    className="flex-1 px-4 py-2.5 rounded-full border border-pure-white bg-transparent text-pure-white placeholder:text-pure-white/50 focus:outline-none focus:ring-2 focus:ring-picton-blue"
                                />
                                <Button 
                                    variant="solid-white" 
                                    onClick={() => {}}
                                >
                                    Join
                                </Button>
                            </div>
                            
                            <p className="text-pure-white/70 text-xs">
                                By subscribing, you consent to receive updates in accordance with our{' '}
                                <Link href="/privacy-policy" className="hover:text-picton-blue">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-12">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-pure-white font-bold text-base">Quick Links</h3>
                            <ul className="flex flex-col gap-3">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link 
                                            href={link.href} 
                                            className="text-pure-white hover:text-picton-blue transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-pure-white font-bold text-base">Resources</h3>
                            <ul className="flex flex-col gap-3">
                                {resources.map((link) => (
                                    <li key={link.href}>
                                        <Link 
                                            href={link.href} 
                                            className="text-pure-white hover:text-picton-blue transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-px bg-green-blue w-full" />
            <div className="bg-black w-full pb-12 lg:pb-16">
                <div className="max-w-7xl mx-auto px-8 pt-10 lg:pt-12 pb-6">
                    <div className="flex justify-between items-center">
                        <p className="text-pure-white text-sm">
                            ©IVO Group Ltd. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link 
                                href="/privacy-policy" 
                                className="text-pure-white underline hover:text-picton-blue transition-colors text-sm"
                            >
                                Privacy Policy
                            </Link>
                            <Link 
                                href="/terms-of-service" 
                                className="text-pure-white underline hover:text-picton-blue transition-colors text-sm"
                            >
                                Terms of Service
                            </Link>
                            <Link 
                                href="/cookies-settings" 
                                className="text-pure-white underline hover:text-picton-blue transition-colors text-sm"
                            >
                                Cookies Settings
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;