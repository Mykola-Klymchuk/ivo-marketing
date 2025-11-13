export interface NavItem {
    name: string;
    href: string;
  }

export const navigation: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'For FM & Cleaning Companies', href: '/for-fm-and-cleaning-companies' },
    { name: 'Resources', href: '/resources' },
    { name: 'About Us', href: '/about' },
]

export const quickLinks: NavItem[] = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Blog Posts', href: '/blog' },
    { name: 'FAQs', href: '/faqs' },
];

export const resources: NavItem[] = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'E-books', href: '/e-books' },
    { name: 'Training', href: '/training' },
];