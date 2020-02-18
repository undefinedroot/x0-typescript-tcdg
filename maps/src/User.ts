import faker from 'faker';
import { Mappable } from './CustomMap';

export default 'red'; // we don't use default in typescript

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';
  constructor() {
    this.name = faker.name.firstName();

    // correct initialization of object,
    // never: this.location.lat = ...
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
