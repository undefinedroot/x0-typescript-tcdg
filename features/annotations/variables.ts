const apples: number = 5;

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, false];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// function
// annotation;      : (i: number) => void
// implementation   = (i: number) => { ... }
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) function that returns 'any' type
const json = '{"x": 10, "x": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // multiple type, either boolean or number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
