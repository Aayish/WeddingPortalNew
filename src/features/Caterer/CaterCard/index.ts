// Export all components from the CaterCard folder
export { default as CatererCard } from './CatererCard2';
export { default as CatererCardImage } from './CatererCardImage';
export { default as CatererCardContent } from './CatererCardContent';
export { default as CatererCardFooter } from './CatererCardFooter';

// Types
export interface CatererCardData {
  id: string;
  name: string;
  image: string;
  location: string;
  capacity: { min: number; max: number };
  cuisineTypes: string[];
  rating: number;
  startingPrice: number;
  isSponsored: boolean;
}