export interface Product {
  id: number;
  name: string;
  price: number;
  src: string;
}

export interface ProductSize {
  height?: number;
  width: number;
}

export interface FavoriteProductSize {
  height: number;
  width: number;
}

export type CardSize = 'small' | 'medium' | 'large';
