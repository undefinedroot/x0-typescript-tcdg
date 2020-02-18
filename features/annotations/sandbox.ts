interface _Car {
  wheelCount: number;
  VIN: string;
}

class Car implements _Car {
  wheelCount: number;
  VIN: string;
  constructor(wheelCount: number, VIN: string) {
    this.wheelCount = wheelCount;
    this.VIN = VIN;
  }
}

const myCar = ({
  wheelCount,
  VIN
}: {
  wheelCount: number;
  VIN: string;
}): void => {
  console.log(`wheel count: ${wheelCount}, VIN: ${VIN}`);
};

myCar(new Car(4, 'XXX'));
