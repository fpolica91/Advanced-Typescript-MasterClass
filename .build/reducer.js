function reduce(arr, reducer, initialValue) {
  let result = initialValue;
  for (const el of arr) {
    result = reducer(result, el);
  }
  return result;
}
console.log(reduce([1, 2, 3, 4], (sum, b) => sum + b, 0));
//# sourceMappingURL=reducer.js.map
