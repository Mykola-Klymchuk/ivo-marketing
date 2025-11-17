import Image from 'next/image';
import clsx from 'clsx';

type BadgeVariant = 'default' | 'blue' | 'orange' | 'teal' | 'green';

interface BadgeProps {
    text: string;
    variant?: BadgeVariant;
    showIcon?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
    default: 'bg-badge-blue',
    blue: 'bg-[var(--blue)]',
    orange: 'bg-[var(--orange)]',
    teal: 'bg-[var(--teal)]',
    green: 'bg-[var(--green)]',
};

const Badge = ({ text, variant = 'default', showIcon = true }: BadgeProps) => {
    return (
        <div
            className={clsx(
                'flex items-center gap-1 text-pure-white text-xs lg:text-sm font-medium px-2.5 py-0.5 rounded-full',
                variantClasses[variant],
            )}
        >
            {showIcon && (
                <Image src="/icons/iVO-whiteicon.png" alt="iVO badge icon" width={8} height={8} loading="lazy" />
            )}
            <span>{text}</span>
        </div>
    );
};

export default Badge;