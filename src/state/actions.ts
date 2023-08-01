import { actions } from "./actionTypes";
import {
  AddToFavorites,
  RemoveFromFavorites,
  SetProductById,
  SetProductsList,
  Type,
} from "./type";

export const FetchProductsListAction = (): Type => ({
  type: actions.FETCH_PRODUCTS_LIST,
});

export const FetchProductByIdAction = (): Type => ({
  type: actions.FETCH_PRODUCT_BY_ID,
});

export const SetProductsListAction = (
  payload: SetProductsList["payload"]
): Type => ({
  type: actions.SET_PRODUCTS_LIST,
  payload,
});

export const SetProductByIdAction = (
  payload: SetProductById["payload"]
): Type => ({
  type: actions.SET_PRODUCT_BY_ID,
  payload,
});

export const AddToFavoritesAction = (
  payload: AddToFavorites["payload"]
): Type => ({
  type: actions.ADD_TO_FAVORITES,
  payload,
});

export const RemoveFromFavoritesAction = (
  payload: RemoveFromFavorites["payload"]
): Type => ({
  type: actions.REMOVE_FROM_FAVOITES,
  payload,
});
