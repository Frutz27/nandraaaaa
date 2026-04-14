
import { Product, Brand } from './types';

export const BRANDS: Brand[] = [
  {
    id: 'nike',
    name: 'Nike',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
    banner: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1920&h=800&fit=crop',
    story: 'Pushing the boundaries of human potential through innovative sport research and futuristic design.',
    themeColor: '#FF4D00',
    accentColor: '#FFFFFF'
  },
  {
    id: 'adidas',
    name: 'Adidas',
    logo: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=100&h=100&fit=crop',
    banner: 'https://images.unsplash.com/photo-1511556532299-8f66aba02b5a?w=1920&h=800&fit=crop',
    story: 'Merging classic heritage with carbon-neutral technology and precision engineering.',
    themeColor: '#000000',
    accentColor: '#00f2ff'
  },
  {
    id: 'puma',
    name: 'Puma',
    logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=100&h=100&fit=crop',
    banner: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1920&h=800&fit=crop',
    story: 'The intersection of high-fashion and street velocity.',
    themeColor: '#E11D48',
    accentColor: '#FFFFFF'
  },
  {
    id: 'newbalance',
    name: 'New Balance',
    logo: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=100&h=100&fit=crop',
    banner: 'https://images.unsplash.com/photo-1619521440807-ba72afd67b12?w=1920&h=800&fit=crop',
    story: 'Craftsmanship meets performance tech for the modern urban traveler.',
    themeColor: '#E2E8F0',
    accentColor: '#0F172A'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Phantom Tech Air',
    brand: 'Nike',
    price: 320,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop',
    description: 'Stealth-grade obsidian finish with reactive carbon-mesh exoskeleton.',
    color: 'Triple Black',
    limited: true,
    category: 'Men'
  },
  {
    id: '2',
    name: 'Ultraboost Quantum X',
    brand: 'Adidas',
    price: 245,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
    description: 'Dark matter infusion technology with 4D-light-absorbing soles.',
    color: 'Void Grey / Cyan',
    limited: false,
    category: 'Unisex'
  },
  {
    id: '3',
    name: 'RS-X Midnight Pulse',
    brand: 'Puma',
    price: 195,
    image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&h=600&fit=crop',
    description: 'Deep-ocean aesthetic with luminous pulse paneling.',
    color: 'Midnight Blue / Cyber',
    limited: true,
    category: 'Men'
  },
  {
    id: '4',
    name: 'Obsidian Phantom X',
    brand: 'New Balance',
    price: 280,
    image: 'https://images.unsplash.com/photo-1597040638539-44568916d3e1?w=600&h=600&fit=crop',
    description: 'Stealth-focused urban gear with carbon-reinforced sole and neural grip.',
    color: 'Obsidian Black',
    limited: true,
    category: 'Men'
  },
  {
    id: '5',
    name: 'Shadow Jordan Zero',
    brand: 'Nike',
    price: 410,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&h=600&fit=crop',
    description: 'Matte-finish obsidian leather with integrated cooling channels.',
    color: 'Dark Shadow',
    limited: true,
    category: 'Men'
  },
  {
    id: '6',
    name: 'Forum Low Eclipse',
    brand: 'Adidas',
    price: 185,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=600&fit=crop',
    description: 'Low-profile tactical silhouette for nocturnal mobility.',
    color: 'Black / Dark Grey',
    limited: false,
    category: 'Unisex'
  }
];
