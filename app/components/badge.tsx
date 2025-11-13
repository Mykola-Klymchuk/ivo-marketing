import Image from 'next/image';

const Badge = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center gap-1 bg-badge-blue text-pure-white text-xs lg:text-sm font-medium px-2 py-0.5 rounded-full">
            <Image src="/icons/iVO-whiteicon.png" alt="Badge icon" width={8} height={8} />
            {text}
        </div>
    )
}

export default Badge;