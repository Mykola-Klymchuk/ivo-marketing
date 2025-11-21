export const solutions = [
    {
        title: 'Better Cleaning Solutions',
        description:
            'Achieve superior cleanliness with advanced technology engineered for efficiency and effectiveness.',
        imageSrc: '/sections/solutions-highlight/frame01231.png',
        imageAlt: 'Close-up of clean flooring surface',
    },
    {
        title: 'Faster Cleaning Processes',
        description:
            'Reduce downtime and enhance productivity with our fast and reliable cleaning machines.',
        imageSrc: '/sections/solutions-highlight/frame11256.png',
        imageAlt: 'Cleaning machine gliding across a hallway',
    },
    {
        title: 'Safer Work Environments',
        description:
            'Prioritize safety with user-friendly machines that minimize risk and ensure compliance.',
        imageSrc: '/sections/solutions-highlight/20240424_111515.jpg',
        imageAlt: 'Operator cleaning ceiling vents with equipment',
    },
    {
        title: 'Greener Cleaning Options',
        description:
            'Choose eco-friendly solutions that reduce your carbon footprint while maintaining high standards.',
        imageSrc: '/sections/solutions-highlight/frame02881.png',
        imageAlt: 'Technician cleaning building exterior',
    },
];

type ProductBadge = 'better' | 'faster' | 'safer' | 'greener';

interface ProductShowcaseItem {
    title: string;
    images: string[];
    imageAlt: string;
}

export const productShowcase: ProductShowcaseItem[] = [
    {
        title: 'OrbiMax 30',
        images: [
            '/sections/machines/OrbiMax 30/_BC_5640 copy.png',
            '/sections/machines/OrbiMax 30/_BC_5641 copy.png',
            '/sections/machines/OrbiMax 30/_BC_5644 copy.png',
        ],
        imageAlt: 'OrbiMax 30 floor cleaning machine',
    },
    {
        title: 'MobiPure',
        images: [
            '/sections/machines/MobiPure/_BC_5738 copy.png',
            '/sections/machines/MobiPure/_BC_5745 copy.png',
            '/sections/machines/MobiPure/_BC_5749 copy.png',
        ],
        imageAlt: 'MobiPure mobile floor cleaning machine',
    },
    {
        title: 'OrbiMax 40',
        images: [
            '/sections/machines/OrbiMax 40/_BC_5672 copy.png',
            '/sections/machines/OrbiMax 40/_BC_5674 copy.png',
            '/sections/machines/OrbiMax 40/_BC_5678 copy.png',
        ],
        imageAlt: 'OrbiMax 40 floor cleaning machine',
    },
    {
        title: 'CarpertKing',
        images: [
            '/sections/machines/CarpetKing/_BC_5765 copy.png',
            '/sections/machines/CarpetKing/_BC_5764 copy.png',
            '/sections/machines/CarpetKing/_BC_5754 copy.png',
        ],
        imageAlt: 'CarpertKing extraction system',
    },
    {
        title: 'RovaWash 250',
        images: [
            '/sections/machines/RovaWash 250/_BC_5568 copy.png',
            '/sections/machines/RovaWash 250/_BC_5569 copy.png',
            '/sections/machines/RovaWash 250/_BC_5567 copy.png',
        ],
        imageAlt: 'RovaWash 250 upright floor cleaning machine',
    },
    {
        title: 'MultiClean 30',
        images: [
            '/sections/machines/MultiClean30/_BC_5780 copy.png',
            '/sections/machines/MultiClean30/_BC_5781 copy.png',
            '/sections/machines/MultiClean30/_BC_5784 copy.png',
        ],
        imageAlt: 'MultiClean 30 cleaning system',
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
