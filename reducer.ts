

function reduce<T, K>(
  arr: T[], 
  reducer: (result: K , elem: T) => K, 
  initialValue: K
): K
{
  let result = initialValue
  for(const el of arr){
    result = reducer(result, el);
  }
  return result
}


console.log(reduce([1,2,3,4], (sum,b) => sum + b, 0))