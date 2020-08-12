import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const charactersCollection = new CharactersCollection('Xaaa');

const sorter = new Sorter(numbersCollection);
const sorterChar = new Sorter(charactersCollection);

sorter.sort();
sorterChar.sort();

console.log(numbersCollection.data)
console.log(charactersCollection.data)
