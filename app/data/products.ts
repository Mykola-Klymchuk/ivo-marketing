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

export const operationalUseCases = [
    {
        title: 'Maximize Sales Potential with Proven Results and Data-driven Insights',
        description: 'Our solutions empower operations teams to achieve faster, safer, and more effective cleaning.',
        imageSrc: '/sections/operational-use-cases/tablet-image.png',
        imageAlt: 'Efficiency of IVO product',
        buttonText: 'Explore',
    },
    {
        title: 'Transform Your Operations with Innovative Cleaning Technology and Support',
        description: 'Sales team can leverage our tools to enhance tender submissions and win more bids.',
        imageSrc: '/sections/operational-use-cases/training-support.png',
        imageAlt: 'IVO product in use',
        buttonText: 'Learn',
    },
    {
        title: 'Drive Results with Comprehensive Solutions Tailored for Operations and Sales Team',
        description: 'Our functional benefits grid highlights how we cater to both operational and sales needs.',
        imageSrc: '/sections/operational-use-cases/meeting-image.png',
        imageAlt: 'Descriding IVO product',
        buttonText: 'Discover',
    },
];

export const customerTestimonials = [
    {
        rating: 5,
        text: "IVO Solutions transformed our cleaning operations completely!",
        author: 'John Doe, Operations Manager, XYZ Corp.',
    },
    {
        rating: 5,
        text: "The efficiency gained has been remarkable",
        author: 'Jane Smith, Sales Director, ABC Inc.',
    },
    {
        rating: 5,
        text: "Our tender success rate increased significantly!",
        author: 'Mark Johnson, Procurement Lead, DEF Ltd.',
    },
];

export const blogPosts = [
    {
        title: 'Essential Cleaning ROI Calculator',
        description: 'Calculate your potential savings and efficiency today.',
        imageSrc: '/sections/download-resources/laptop-calc-image.png',
        imageAlt: 'Essential Cleaning ROI Calculator',
        authorName: 'Russell Pollard',
        authorAvatar: '/sections/download-resources/jurica-koletic-7YVZYZeITc8-unsplash.png',
        date: '15 Nov 2025',
        readTime: '3 min read',
    },
    {
        title: 'Ultimate Cleaning Equipment Guide',
        description: 'Explore our comprehensive guide to the best cleaning machines.',
        imageSrc: '/sections/download-resources/Brochure-mockup.jpg',
        imageAlt: 'Ultimate Cleaning Equipment Guide',
        authorName: 'Adrian Gauntlett',
        authorAvatar: '/sections/download-resources/sergio-de-paula-c_GmwfHBDzk-unsplash.png',
        date: '25 Oct 2025',
        readTime: '6 min read',
    },
    {
        title: 'Cleaning Audit Checklist Template',
        description: 'Use this checklist to ensure thorough cleaning audits.',
        imageSrc: '/sections/download-resources/checklist-image.png',
        imageAlt: 'Cleaning Audit Checklist Template',
        authorName: 'Amy Neve',
        authorAvatar: '/sections/download-resources/aiony-haust-3TLl_97HNJo-unsplash.png',
        date: '05 Nov 2025',
        readTime: '4 min read',
    },
];
