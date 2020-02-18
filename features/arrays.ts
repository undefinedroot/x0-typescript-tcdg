// type inference, looked at value of elements
const carMakers = ['ford', 'toyota', 'chevy'];

// type annotation
const fruits: string[] = [];

const dates = [new Date(), new Date()];

// type annotation, 2-dimensional array
const carsByMake: string[][] = [];
// only add annotation if there is no value on declaration

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values;
//carMakers.push(100);

// help with 'map', adds autocomplete
// that belongs to string
carMakers.map((car: string): string => {
  return car;
});

//arrays with different types

// flexible types, using type inference
const importantDates = [new Date(), '2030-10-10'];
// using type annotation, we should avoid 'any' type
const otherVariable: (string | boolean)[] = [];

importantDates.push('2030');
//importantDates.push(false); // error, of course
importantDates.push(new Date());
