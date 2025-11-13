'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '../button';
import { navigation } from '../../data/navigation';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-16 py-4 bg-night w-full shadow-[0_8px_8px_rgba(0,0,0,0.5)] sticky top-0 z-50">
            <Link href="/">
            <Image src='/logo/iVO-whitelogo-no-tagline.png' alt="Logo" width={100} height={20} />
            </Link>
            <nav>
                <ul className="flex items-center gap-12">
                    {navigation.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="text-pure-white hover:text-picton-blue">{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center gap-2">
                <Button variant="outlined-white">Demo</Button>   
                <Button variant="solid-white">Login</Button>
            </div>
        </header>
    )
}

export default Header;