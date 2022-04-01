function get(object, key) {
  return object[key];
}
function pick(arr, key) {
  let result = [];
  for (let item in arr) {
    result.append(item[key]);
  }
  return result;
}
//# sourceMappingURL=type_arguments.js.map
