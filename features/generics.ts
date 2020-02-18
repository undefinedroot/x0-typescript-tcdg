class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// Using Generic Class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

const arr2 = new ArrayOfAnything(['a']); // generics type inference

// Generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Refactor, using Generic Function;
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a']);

// type inference, but it is still ideal to use type annotations, to prevent any accidents
printAnything([1, 2, 3]);

// Generic Constraints

class Car {
  print() {
    console.log('i am a car');
  }
}

class House {
  print() {
    console.log('i am a house');
  }
}

interface Printable {
  print(): void;
}

// using 'extends' to indicate a generic constraint
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<Car>([new Car(), new Car()]);
