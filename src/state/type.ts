import { actions } from "./actionTypes";

export interface State {
  list: Product[];
  favorites: any[];
  isLoading: boolean;
  selectedItem: null | Product;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  src: string;
}

export interface FetchProductById {
  type: actions.FETCH_PRODUCT_BY_ID;
}

export interface SetProductById {
  type: actions.SET_PRODUCT_BY_ID;
  payload: Product;
}

export interface FetchProductsList {
  type: actions.FETCH_PRODUCTS_LIST;
}

export interface SetProductsList {
  type: actions.SET_PRODUCTS_LIST;
  payload: any[];
}

export interface AddToFavorites {
  type: actions.ADD_TO_FAVORITES;
  payload: {};
}

export interface RemoveFromFavorites {
  type: actions.REMOVE_FROM_FAVOITES;
  payload: number | string;
}

export type Type =
  | FetchProductById
  | FetchProductsList
  | SetProductById
  | SetProductsList
  | AddToFavorites
  | RemoveFromFavorites;
