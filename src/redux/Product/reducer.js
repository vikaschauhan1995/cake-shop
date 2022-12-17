import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_LIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  WISH_LIST,
  ADD_TO_PRODUCT_LIST,
  PRODUCT_LIST,
  PRUDUCT_LAZY_DATA_LOAD,
  PRUDUCT_LAZY_DATA_LOADED,
  PRUDUCT_LAZY_DATA_LOADING,
  PRODUCT_LAZY_DATA_LOAD_SUCCESS,
  IS_PRODUCT_LAZY_DATA_LIST_END,
  PRODUCT_LAZY_DATA_LOAD_ERROR,
  PRODUCT_LAZY_DATA_LOAD_FAILURE,
  PRUDCT_LAZY_DATA_LOAD_FAILURE_ERROR,
  REPLACE_PRODUCT_LIST,
  ROW_PRODUCT_LIST
} from './const';
import { removeObjectFromListById } from './methods/removeObjectFromListById';

const initialState = {
  [CART_LIST]: [],
  [WISH_LIST]: [],
  [PRODUCT_LIST]: [],
  [PRUDUCT_LAZY_DATA_LOADED]: true,
  [PRUDUCT_LAZY_DATA_LOADING]: false,
  [IS_PRODUCT_LAZY_DATA_LIST_END]: false,
  [PRODUCT_LAZY_DATA_LOAD_FAILURE]: false,
  [PRUDCT_LAZY_DATA_LOAD_FAILURE_ERROR]: ''
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
        let list = [...state[PRODUCT_LIST], ...action.payload];
        return {
          ...state,
          [PRODUCT_LIST]: list,
          [ROW_PRODUCT_LIST]: list
        };
      } else {
        return { ...state, [IS_PRODUCT_LAZY_DATA_LIST_END]: true };
      }
    case PRUDUCT_LAZY_DATA_LOAD:
      return { ...state, [PRUDUCT_LAZY_DATA_LOADED]: false, [PRUDUCT_LAZY_DATA_LOADING]: true };
    case PRODUCT_LAZY_DATA_LOAD_SUCCESS:
      return { ...state, [PRUDUCT_LAZY_DATA_LOADED]: true, [PRUDUCT_LAZY_DATA_LOADING]: false };
    case PRODUCT_LAZY_DATA_LOAD_ERROR:
      return {
        ...state,
        [PRUDUCT_LAZY_DATA_LOADED]: true,
        [PRUDUCT_LAZY_DATA_LOADING]: false,
        [PRODUCT_LAZY_DATA_LOAD_FAILURE]: true,
        [PRUDCT_LAZY_DATA_LOAD_FAILURE_ERROR]: action.payload
      }
    case REPLACE_PRODUCT_LIST:
      return { ...state, [PRODUCT_LIST]: action.payload };
    default:
      return state;
  }
}