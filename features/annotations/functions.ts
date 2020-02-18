// we got to annotate arguments
// we can leave typescript to infer the return type
// however, it's good to always indicate the type
// so that we are always sure it returns something
// instead of 'void'
// --- arrow function ---
const add = (a: number, b: number): number => {
  return a + b;
};

// --- functions ---
function divide(a: number, b: number): number {
  return a / b;
}

// --- anonymous functions ---
const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // possible return types despite it's 'void':
  //    return null;
  //    return undefined;
};

// 'never' does not return a value because
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// destructure argument using annotation
// destructuring and annotation are two separate statements using :
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
