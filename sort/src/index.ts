import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([5, 9, 0, -1, 8, -7, -3, 4, 2, 1]);
const characterCollection = new CharactersCollection('skjfbweojnfDKJSnksjdnf');
const linkedList = new LinkedList();
for(let i = 0; i < 5; i++) {
  linkedList.add(Math.ceil(Math.random() * 100000));
}
linkedList.print();

numbersCollection.sort();
console.log(numbersCollection.data);

characterCollection.sort();
console.log(characterCollection.data);

linkedList.sort();
linkedList.print()
// const sorter: Sorter = new Sorter(numbersCollection);
// const charSorter: Sorter = new Sorter(characterCollection);
// const listSorter: Sorter = new Sorter(linkedList);

// sorter.sort();
// console.log(sorter.collection);

// charSorter.sort();
// console.log(charSorter.collection);

// listSorter.sort();
// linkedList.print();
