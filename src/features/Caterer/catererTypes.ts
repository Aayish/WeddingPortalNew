export interface CatererImage {
  id: string;
  url: string;
  alt: string;
}

export interface CatererCapacity {
  min: number;
  max: number;
}

export interface CatererPrice {
  starting: number;
}

export interface Caterer {
  id: string;
  name: string;
  images: CatererImage[];
  location: string;
  capacity: CatererCapacity;
  price: CatererPrice;
  rating: number;
  description: string;
  amenities?: string[];
  isSponsored: boolean;
}
