


export function getFilteredItems(arr, input) {
  if (input === undefined || input === "") {
    return arr;
  }
  const lowerInput = input.toLowerCase();
  const numToStirng = "" + input;
  let x = arr?.filter((a) => {
    const lowername = a.name.toLowerCase();
    const lowerDescription = a.description.toLowerCase();
    const priceToString = "" + a.price;
    if (lowername.includes(lowerInput) || lowerDescription.includes(lowerInput) || priceToString.includes(numToStirng)) {
      return a;
    }
  });
  return x;
}