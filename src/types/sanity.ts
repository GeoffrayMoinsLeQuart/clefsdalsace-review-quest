export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Property {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  type: 'conciergerie' | 'gestion-locative';
  status: 'available' | 'rented' | 'sold';
  images: SanityImage[];
  features: string[];
  amenities?: string[];
  revenue?: {
    before: string;
    after: string;
    increase: string;
  };
  details?: {
    floor?: number;
    parking?: boolean;
    elevator?: boolean;
    balcony?: boolean;
    furnished?: boolean;
  };
}

export interface Author {
  name: string;
  image?: SanityImage;
  bio?: string;
}

export interface Category {
  title: string;
  slug: {
    current: string;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage: SanityImage;
  body: any; // Portable Text content
  publishedAt: string;
  author: Author;
  categories: Category[];
}
