import { ADD_TO_CART, REMOVE_FROM_CART, CART_LIST } from './const';
import { removeFromCart } from './methods/removeFromCart';

const initialState = {
  [CART_LIST]: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [CART_LIST]: [...state[CART_LIST], action.payload] };
    case REMOVE_FROM_CART:
      const updateCartList = removeFromCart(state[CART_LIST], action.payload);
      return { ...state, [CART_LIST]: updateCartList };
    default:
      return state;
  }
}