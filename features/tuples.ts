const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// type infer, but the order can be swapped,
// which violates the rule of Tuples
const coke: (string | boolean | number)[] = ['brown', true, 40];

// this array will have a consistent order
// of element types, which follows rule of Tuples
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type Alias: a type that we can use (flexible)
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];

const carSpecs: [number, number] = [400, 3354];

// object better than Tuple if you want to
// better describe this datastructure
const carStats = {
  horsepower: 400,
  weight: 3354
};
