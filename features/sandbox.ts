// testing multiple generic optional interface

interface MartialArtist {
  name: string;
  age: number;
  weightInKilo: number;
  arts: string[];
}

interface StrikeAttackable {
  punch?(): string;
  kick?(): string;
}

interface GrappleAttackable {
  tackle?(): string;
  jointLock?(): string;
}

const mma = {
  name: 'John',
  age: 20,
  weightInKilo: 80,
  arts: ['Judo', 'Karate'],
  punch() {
    return 'mma punch';
  },
  tackle() {
    return 'mma tackle';
  }
};

const taekwondo = {
  name: 'Doe',
  age: 20,
  weightInKilo: 80,
  arts: ['Taekwondo'],
  punch() {
    return 'taekwondo punch';
  },
  kick() {
    return 'taekwondo kick';
  }
};

const showStat = (
  martialArtist: MartialArtist & StrikeAttackable & GrappleAttackable
): void => {
  const objKey = Object.keys(martialArtist);

  if (objKey.indexOf('age') != -1) {
    console.log(`fighter's Age: ${martialArtist.age}`);
  }

  if (objKey.indexOf('punch') != -1) {
    console.log(`figher attacks with: ${martialArtist.punch()}`);
  }

  if (objKey.indexOf('tackle') != -1) {
    console.log(`fighter attacks with: ${martialArtist.tackle()}`);
  }
};

showStat(mma);
showStat(taekwondo);
