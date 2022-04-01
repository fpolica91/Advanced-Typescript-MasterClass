
function map<T, K>(
  items: T[],
  mappingFunction: (item: T) => K): K[] {
    const results: K[] = []
    for (let item of items) {
      results.push(mappingFunction(item));
    }
    return results
}

interface Person { name: string; age: number;  }
const persons: Person[] = [{ name: 'John', age: 35 }]
const names = map<Person, string>(persons, person => person.name)


