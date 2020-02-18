interface iVehicle {
  drive(): void;
  honk(): void;
}

class Vehicle implements iVehicle {
  // for initialization
  // 'public color'  becomes a field
  // equivalent to;
  //    color: string
  //    this.color = color;
  // it is a shortcut
  // alternatively, you can use private or protected
  constructor(public color: string) {}

  //function
  public getSecretMessage(): string {
    return 'secret message';
  }
  // method
  public drive(): void {
    console.log('c c c');
  }
  public honk(): void {
    console.log('h h h');
  }
  // private:
  //    can't be used outside
  //    can't be used by child class
  private beep(): void {
    console.log('b b b');
  }
  // protected:
  //    can't be used outside
  //    can be used by child class
  protected dive(): void {
    console.log('d d d');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// inheritance from Vehicle class
class Car extends Vehicle {
  // we don't want to place a modifier on 'color'
  // because we don't want to override the one from parent
  constructor(public wheels: number, color: string) {
    // inheriting class requires to also
    // use the constructor of the parent
    // which is super()
    super(color);
  }
  // override method from parent class 'Vehicle'
  // you cannot change the access modifier
  // so you can't turn drive() into private
  public drive(): void {
    console.log('cc= v v v');
  }
  private fly(): void {
    console.log('cc= f f f');
  }
}

const car = new Car(4, 'red');
car.drive();
car.honk();
console.log(`cc= ${car.color}`);
