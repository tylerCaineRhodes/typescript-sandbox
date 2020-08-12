import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const charactersCollection = new CharactersCollection('Xaaa');
const linkedListCollection = new LinkedList();
  linkedListCollection.add(500)
  linkedListCollection.add(-10)
  linkedListCollection.add(-3)
  linkedListCollection.add(4)

const sorter = new Sorter(numbersCollection);
const sorterChar = new Sorter(charactersCollection);
const sorterLL = new Sorter(linkedListCollection);

sorter.sort();
sorterChar.sort();
sorterLL.sort();

linkedListCollection.print();

console.log(numbersCollection.data)
console.log(charactersCollection.data)

