import { productList } from '../static/mock_data';

export function getProductItems(pageNumber, number_of_items) {
  const productListclone = [...productList];
  const startIndex = !(pageNumber < 2) ? (pageNumber - 1) * number_of_items : 0;
  const endIndex = pageNumber * number_of_items;
  const sortItems = productListclone.splice(startIndex, number_of_items)
  // console.log(startIndex);
  // console.log(endIndex);
  return sortItems;
}