'use client';

import Image from 'next/image';

interface PortalCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    onClick?: () => void;
}

const PortalCard = ({
    imageSrc,
    imageAlt,
    title,
    description,
    onClick
}: PortalCardProps) => {
    return (
        <article 
            className="relative w-full h-48 lg:h-64 rounded-3xl overflow-hidden cursor-pointer group"
            onClick={onClick}
        >
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    loading="lazy"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-black/40 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-4">
                <div>
                    <div className="mb-2 relative w-10 h-10">
                        <Image
                            src="/icons/login-box-icon.png"
                            alt="Login icon"
                            fill
                            className="brightness-0 invert object-contain"
                            loading="lazy"
                        />
                    </div>
                    <h3 className="text-green-blue text-lg lg:text-xl font-bold mb-2">
                        {title}
                    </h3>
                    <p className="text-pure-white text-sm lg:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default PortalCard;

