function zip(array1, array2) {
  const length = Math.min(array1.length, array2.length);
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push([array1[i], array2[i]]);
  }
  return result;
}
console.log(zip([1, 2, 3], [4, 5, 6]));
//# sourceMappingURL=zip.js.map
