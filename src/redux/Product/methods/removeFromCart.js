


export function removeFromCart(previouseStateOfCart, item) {
  return previouseStateOfCart.filter(pItem => pItem.id !== item.id);
}