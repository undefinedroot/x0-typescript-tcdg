class HoldAnything<TypeOfData> {
  constructor(public data: TypeOfData) {}
}

const holdNumber = new HoldAnything<number>(123);

const holdString = new HoldAnything<string>('323');
