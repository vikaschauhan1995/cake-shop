import { productList } from '../static/mock_data';

export function getObjById(id) {
  const x = productList.find(e => {
    if (e.id === id) {
      return e;
    }
  });
  return x;
}