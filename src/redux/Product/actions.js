import { ADD_TO_CART, REMOVE_FROM_CART } from './const';

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