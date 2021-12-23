// const cars: string[] = ['Ford', 'Audi'];

// const cars2: Array<string> = ['Ford', 'Audi']; // generic???

// const promise: Promise<number> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(32);
//   }, 2000)
// })

// const promise2 = new Promise<string>(resolve => {
//   setTimeout(() => {
//     resolve('Promise resolved');
//   }, 2000)
// })

// promise2.then(data => {
//   console.log(data.toLocaleLowerCase().trim().toUpperCase());
// });

// function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
//   return Object.assign({}, a, b);
// }

// const merged = mergeObjects({name: 'YT'}, {age: 11});
// const merged2 = mergeObjects({model: 'Ford'}, {year: 2008});

// console.log(merged.name);
// console.log(merged2.year);

// const merged3 = mergeObjects('aaa', 'bbb');

// console.log(merged3);

// interface ILength {
//   length: number
// }

// function withCount<T extends ILength>(value: T): {value: T, count: string} {
//   return {
//     value,
//     count: `Here is ${value.length} symbols`
//   }
// }

// console.log(withCount('Hello typescript'));
// console.log(withCount(['Hello typescript', 'Ford']));
// console.log(withCount(20));
// console.log(withCount({length: 7}));

// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//   return obj[key];
// }

// const person = {
//   name: 'YT',
//   age: 11,
//   job: 'director'
// }

// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));

// class Collection<T extends number | string | boolean> {
//   constructor(private _items: T[] = []) {}

//   add(item: T) {
//     this._items.push(item)
//   }

//   remove(item: T) {
//     this._items = this._items.filter( i => i !== item);
//   }

//   get items(): T[] {
//     return this._items;
//   }
// }

// const strings = new Collection<string>(['I', 'Am', 'Strings']);
// strings.add('!');

// strings.remove('Am');

// console.log(strings.items);

// const numbers = new Collection<number>([1, 6, 8]);
// numbers.add(7);

// numbers.remove(6);

// console.log(numbers.items);

// const objs = new Collection([{a: 1}, {b: 2}]);

// objs.remove({b: 2});

// console.log(objs.items);

interface Car {
  model: string,
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {};

  if(model.length > 3) {
    car.model = model;
  }

  if(year > 2000) {
    car.year = year;
  }

  return car as Car;
}

const cars: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars.shift();

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}

// ford.model = 'Ferrari';