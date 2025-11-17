export const solutions = [
    {
        title: 'Better Cleaning Solutions',
        description:
            'Achieve superior cleanliness with advanced technology engineered for efficiency and effectiveness.',
        imageSrc: '/sections/solutions-highlight/frame01231.png',
        imageAlt: 'Close-up of clean flooring surface',
        variant: 'blue' as const,
    },
    {
        title: 'Faster Cleaning Processes',
        description:
            'Reduce downtime and enhance productivity with our fast and reliable cleaning machines.',
        imageSrc: '/sections/solutions-highlight/frame11256.png',
        imageAlt: 'Cleaning machine gliding across a hallway',
        variant: 'orange' as const,
    },
    {
        title: 'Safer Work Environments',
        description:
            'Prioritize safety with user-friendly machines that minimize risk and ensure compliance.',
            imageSrc: '/sections/solutions-highlight/20240424_111515.jpg',
        imageAlt: 'Operator cleaning ceiling vents with equipment',
        variant: 'teal' as const,
    },
    {
        title: 'Greener Cleaning Options',
        description:
            'Choose eco-friendly solutions that reduce your carbon footprint while maintaining high standards.',
        imageSrc: '/sections/solutions-highlight/frame02881.png',
        imageAlt: 'Technician cleaning building exterior',
        variant: 'green' as const,
    },
];

type ProductBadge = 'better' | 'faster' | 'safer' | 'greener';

interface ProductShowcaseItem {
    name: string;
    image: string;
    imageAlt: string;
    imageScale: number;
    imageTranslateY: string;
    imageObjectPosition: string;
    badges: ProductBadge[];
    subtitle?: string;
    productImages?: string[];
    isCarousel?: boolean;
    imageHeightClass?: string;
}

export const productShowcase: ProductShowcaseItem[] = [
    {
        name: 'iVO Daily X1',
        image: '/sections/machines/_BC_5685 copy.png',
        imageAlt: 'iVO Daily X1 scrubbing machine',
        imageScale: 1.8,
        imageTranslateY: '-40%',
        imageObjectPosition: 'center -50%',
        badges: ['better', 'faster', 'safer', 'greener'],
        subtitle: 'Watch product video',
        productImages: ['/sections/machines/_BC_5685 copy.png'],
        isCarousel: true,
    },
    {
        name: 'PowerBrush XL 2.0',
        image: '/sections/machines/_BC_5676 copy.png',
        imageAlt: 'PowerBrush XL 2.0 handheld scrubber',
        imageScale: 1.85,
        imageTranslateY: '-38%',
        imageObjectPosition: 'center -45%',
        badges: ['better', 'faster', 'safer', 'greener'],
        subtitle: 'Watch product video',
        productImages: ['/sections/machines/_BC_5676 copy.png'],
        isCarousel: true,
    },
    {
        name: 'iVO RovaWash 450',
        image: '/sections/machines/_BC_5643 copy.png',
        imageAlt: 'iVO RovaWash upright machine',
        imageScale: 1.75,
        imageTranslateY: '-42%',
        imageObjectPosition: 'center -48%',
        badges: ['better', 'faster', 'safer', 'greener'],
        subtitle: 'Watch product video',
        productImages: ['/sections/machines/_BC_5643 copy.png'],
        isCarousel: true,
    },
    {
        name: 'CarpertKing',
        image: '/sections/machines/_BC_5549 copy.png',
        imageAlt: 'CarpertKing extraction system',
        imageScale: 1.65,
        imageTranslateY: '-35%',
        imageObjectPosition: 'center -40%',
        badges: ['better', 'faster', 'safer', 'greener'],
        subtitle: 'Watch product video',
        productImages: ['/sections/machines/_BC_5549 copy.png'],
        isCarousel: true,
    },
    {
        name: 'iVO OrbiMax 55',
        image: '/sections/machines/_BC_5685 copy.png',
        imageAlt: 'iVO OrbiMax 55 orbital scrubber',
        imageScale: 1.8,
        imageTranslateY: '-42%',
        imageObjectPosition: 'center -55%',
        badges: ['better', 'faster', 'safer', 'greener'],
        subtitle: 'Watch product video',
        productImages: ['/sections/machines/_BC_5685 copy.png'],
        isCarousel: true,
    },
    {
        name: 'MultiClean 30',
        image: '/sections/machines/_BC_5549 copy.png',
        imageAlt: 'MultiClean 30 cleaning system',
        imageScale: 1.6,
        imageTranslateY: '-32%',
        imageObjectPosition: 'center -38%',
        badges: ['better', 'faster', 'safer', 'greener'],
        subtitle: 'Watch product video',
        productImages: ['/sections/machines/_BC_5549 copy.png'],
        isCarousel: true,
    },
];