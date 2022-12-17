import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  GET_PRODUCT_LIST,
  ADD_TO_PRODUCT_LIST
} from './const';

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

export function getProductList(pageNum, number_of_items_on_pages) {
  return {
    type: GET_PRODUCT_LIST,
    payload: { pageNum, number_of_items_on_pages }
  };
}

export function addToProductList(items) {
  return {
    type: ADD_TO_PRODUCT_LIST,
    payload: items
  }
}