import { ADD_TO_CART, REMOVE_FROM_CART, CART_LIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, WISH_LIST } from './const';
import { removeObjectFromListById } from './methods/removeObjectFromListById';

const initialState = {
  [CART_LIST]: [],
  [WISH_LIST]: []
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
    default:
      return state;
  }
}