const profile = {
  givenName: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, givenName }: { age: number; givenName: string } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
