function map(items, mappingFunction) {
  const results = [];
  for (let item of items) {
    results.push(mappingFunction(item));
  }
  return results;
}
const persons = [{ name: "John", age: 35 }];
const names = map(persons, (person) => person.name);
function reduce(arr, reducer, initialValue) {
  let result = initialValue;
  for (const el of arr) {
    result = reducer(result, el);
  }
  return result;
}
function zip(array1, array2) {
  const length = Math.min(array1.length, array2.length);
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push([array1[i], array2[i]]);
  }
  return result;
}
const people = [
  { name: "chloe", age: 5 },
  { name: "mister", age: 100 },
  { name: "phillips", age: 7 }
];
function pick(arr, key) {
  let result = [];
  for (let item of arr) {
    result.push(item[key]);
  }
  return result;
}
console.log(pick(people, "age"));
//# sourceMappingURL=index.js.map
