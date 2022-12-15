

export function ascending(arr) {
  let x = arr.sort((a, b) => {
    const lower_a = a.name.toLowerCase();
    const lower_b = b.name.toLowerCase();
    if (lower_a > lower_b) {
      return 1;
    } else if (lower_a < lower_b) {
      return -1;
    }
    return 0;
  });
  return x;
}