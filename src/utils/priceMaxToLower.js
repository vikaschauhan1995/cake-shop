


export function priceMaxToLower(arr) {
  let x = arr.sort((a, b) => {
    if (a.price > b.price) {
      return -1;
    } else if (a.price < b.price) {
      return 1;
    }
    return 0;
  });
  return x;
}