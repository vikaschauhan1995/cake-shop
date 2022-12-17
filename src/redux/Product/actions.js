import { ascending } from '../../utils/ascending';
import { descending } from '../../utils/descending';
import { priceLowerToMax } from '../../utils/priceLowerToMax';
import { priceMaxToLower } from '../../utils/priceMaxToLower';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  GET_PRODUCT_LIST,
  REPLACE_PRODUCT_LIST
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

export function replaceToProductList(items) {
  return {
    type: REPLACE_PRODUCT_LIST,
    payload: items
  }
}

export function ascendingProductList(items) {
  const sorted_items = ascending(items);
  return {
    type: REPLACE_PRODUCT_LIST,
    payload: sorted_items
  }
}

export function descendingProductList(items) {
  const sorted_items = descending(items);
  return {
    type: REPLACE_PRODUCT_LIST,
    payload: sorted_items
  }
}

export function priceLowToMax(items) {
  const sorted_items = priceLowerToMax(items);
  return {
    type: REPLACE_PRODUCT_LIST,
    payload: sorted_items
  }
}

export function priceMaxToLow(items) {
  const sorted_items = priceMaxToLower(items);
  return {
    type: REPLACE_PRODUCT_LIST,
    payload: sorted_items
  }
}