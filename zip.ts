function zip<T, K>(array1: T[], array2: K[]): [T, K][] {
  const length = Math.min(array1.length, array2.length);
  const result: [T, K][] = [];
  for (let i = 0; i < length; i++) {
    result.push([array1[i], array2[i]]);
  }
  return result;

}

console.log(zip([1,2,3], [4,5,6]))