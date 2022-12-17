import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_LIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  WISH_LIST,
  ADD_TO_PRODUCT_LIST,
  PRODUCT_LIST,
  IS_PRODUCT_LAZY_DATA_FETCHED,
  PRUDUCT_LAZY_DATA_LOAD,
  PRUDUCT_LAZY_DATA_LOADED,
  PRUDUCT_LAZY_DATA_LOADING,
  PRODUCT_LAZY_DATA_LOAD_SUCCESS,
  IS_PRODUCT_LAZY_DATA_LIST_END
} from './const';
import { removeObjectFromListById } from './methods/removeObjectFromListById';

const initialState = {
  [CART_LIST]: [],
  [WISH_LIST]: [],
  [PRODUCT_LIST]: [],
  [PRUDUCT_LAZY_DATA_LOADED]: true,
  [PRUDUCT_LAZY_DATA_LOADING]: false,
  [IS_PRODUCT_LAZY_DATA_LIST_END]: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [CART_LIST]: [...state[CART_LIST], action.payload] };
    case REMOVE_FROM_CART:
      const updateCartList = removeObjectFromListById(state[CART_LIST], action.payload);
      return { ...state, [CART_LIST]: updateCartList };
    case ADD_TO_WISHLIST:
      return { ...state, [WISH_LIST]: [...state[WISH_LIST], action.payload] };
    case REMOVE_FROM_WISHLIST:
      const updatedWishList = removeObjectFromListById(state[WISH_LIST], action.payload);
      return { ...state, [WISH_LIST]: updatedWishList };
    case ADD_TO_PRODUCT_LIST:
      if (action.payload?.length > 0) {
        return { ...state, [PRODUCT_LIST]: [...state[PRODUCT_LIST], ...action.payload] };
      } else {
        return { ...state, [IS_PRODUCT_LAZY_DATA_LIST_END]: true };
      }
    case PRUDUCT_LAZY_DATA_LOAD:
      return { ...state, [PRUDUCT_LAZY_DATA_LOADED]: false, [PRUDUCT_LAZY_DATA_LOADING]: true };
    case PRODUCT_LAZY_DATA_LOAD_SUCCESS:
      return { ...state, [PRUDUCT_LAZY_DATA_LOADED]: true, [PRUDUCT_LAZY_DATA_LOADING]: false };
    default:
      return state;
  }
}