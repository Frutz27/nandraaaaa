
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  color: string;
  limited?: boolean;
  releaseDate?: string;
  category: 'Men' | 'Women' | 'Unisex';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  banner: string;
  story: string;
  themeColor: string;
  accentColor: string;
}

export type PageType = 'home' | 'shop' | 'brands' | 'new' | 'limited' | 'promo' | 'community';
