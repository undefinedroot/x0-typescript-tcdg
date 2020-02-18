import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 30, -5, 100]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XaBddAcSG');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedList();
linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-3);
linkedListCollection.add(4);
linkedListCollection.sort();
linkedListCollection.print();
