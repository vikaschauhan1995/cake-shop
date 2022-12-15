


export function removeItemFromListOfObjects(arr, obj) {
  const x = arr.filter(item => {
    if (item.id !== obj.id) {
      return item;
    }
  });
  return x;
}