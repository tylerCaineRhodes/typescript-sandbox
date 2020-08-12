import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

const charactersCollection = new CharactersCollection('Xaaa');

const linkedListCollection = new LinkedList();
  linkedListCollection.add(500)
  linkedListCollection.add(-10)
  linkedListCollection.add(-3)
  linkedListCollection.add(4)

charactersCollection.sort();
linkedListCollection.sort()
numbersCollection.sort();

console.log(charactersCollection.data)
console.log(numbersCollection.data)
linkedListCollection.print();
