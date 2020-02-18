export class Attributes<T> {
  constructor(private data: T) {}

  // type of K can only be one of any keys of T
  // typescript will do type inference, so no need to
  // define the generic type when using this
  // made it to an arrow function, so that whatever
  // usage you do on another class, 'this' will be bound
  // to this class instead of the caller

  // T is UserProps
  // K is the string value that is converted to type,
  // in our example: 'id', 'name', 'age'
  // therefore, K is only limited to the keys of T
  // we return UserProps[K]
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    // copy value of 'update' over to 'data'
    Object.assign(this.data, update);
  };

  getAll = (): T => {
    return this.data;
  };
}
