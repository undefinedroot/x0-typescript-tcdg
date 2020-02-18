import 'reflect-metadata'; // add 'Reflect' to global namespace

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrrrrr');
  }
}

// decorator factory
function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path);
    // router.get(path, target.prototype[key]);
  }
}

// const plane = {
//   color: 'red'
// };

// // invisible property
// // associate this with the 'plane' object
// Reflect.defineMetadata('note', 'hi there', plane);

// // console.log(plane);

// const note = Reflect.getMetadata('note', plane);

// console.log(note);

// const plane2 = {
//   color: 'blue'
// };

// // attach metadata to the property 'color' from object 'plane2'
// Reflect.defineMetadata('note2', 'hello there', plane, 'color');

// const note2 = Reflect.getMetadata('note2', plane, 'color');
// console.log(note2);
