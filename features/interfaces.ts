// create a new interface means creating a new type
// - should always be capitalized
// - can express both primitive and object types
// - should be named more of a generic name for reuseability
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(2000),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
  anotherFunction(): void {}
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// as long as the passed object has
// the properties that satisfy
// the interface type of the argument, in this case,
// even if 'oldCivic' object has anotherFunction() and other properties,
// it is still regarded as a 'Reportable' interface
printSummary(oldCivic);
// reused the function with a generic interface for a 'drink' object
printSummary(drink);
