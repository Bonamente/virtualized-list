import { Product } from '../types';

export interface State {
  favorites: Product[];
}

export type Action =
  | { type: 'addToFavorites'; product: Product }
  | { type: 'removeFromFavorites'; id: number };
