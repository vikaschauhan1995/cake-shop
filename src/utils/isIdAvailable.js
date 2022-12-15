

export function isIdAvailable(arr, id) {
  let isAvalable = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return true;
    }
  }
  return isAvalable;
}