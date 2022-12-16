


export function removeObjectFromListById(previouseStateOfCart, item) {
  return previouseStateOfCart.filter(pItem => pItem.id !== item.id);
}