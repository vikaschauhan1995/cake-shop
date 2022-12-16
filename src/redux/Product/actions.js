import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './const';

export function addToCart(productItem) {
  return {
    type: ADD_TO_CART,
    payload: productItem
  }
}

export function removeFromCart(productItem) {
  return {
    type: REMOVE_FROM_CART,
    payload: productItem
  }
}

export function addToWishList(productItem) {
  return {
    type: ADD_TO_WISHLIST,
    payload: productItem
  };
}

export function removeFromWishList(productItem) {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: productItem
  };
}