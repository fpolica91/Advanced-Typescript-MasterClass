interface Person {
  age: number; 
  name: string;
}

declare const person: Person;

function get<T, K extends keyof T>(object: T, key: K): T[K]{
  return object[key];
}

const people: Person[] = [
  {name : 'chloe', age: 5},
  {name : 'mister', age: 100}, 
  {name : 'phillips', age: 7}
]


function pick<T, K extends keyof T>(arr: T[], key:K):T[K][]{
  let result: T[K][] = [];
  for(let item in arr){
      result.append(item[key]);
  }
  return result;
}

console.log(pick(people, 'age'))