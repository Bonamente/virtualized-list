import { createStore } from 'react-hooks-global-state';
import { Action, State } from './types';
import { Product } from '../types';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addToFavorites':
      return {
        ...state,
        favorites: [...state.favorites, action.product],
      };
    case 'removeFromFavorites':
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.id !== action.id
        ),
      };
    default:
      return state;
  }
};

const initialState = { favorites: [] };

export const { dispatch, useStoreState } = createStore(reducer, initialState);

export const addToFavorites = (product: Product) => {
  dispatch({ type: 'addToFavorites', product });
};

export const removeFromFavorites = (id: number) => {
  dispatch({ type: 'removeFromFavorites', id });
};
