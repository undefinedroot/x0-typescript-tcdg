@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('whoa, an error!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string): void {
  console.log(key);
}

// decorator factory; decorator that returns a function
function logError(errorMessage: string) {
  // arguments are important!
  // target; prototype of object
  // key; key of property/method/accesor
  // desc; property descriptor
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    // get existing code inside pilot()
    const method = desc.value;

    // replacing code inside pilot()
    // causing interception of code
    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
