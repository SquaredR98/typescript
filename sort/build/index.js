"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([5, 9, 0, -1, 8, -7, -3, 4, 2, 1]);
var characterCollection = new CharactersCollection_1.CharactersCollection('skjfbweojnfDKJSnksjdnf');
var linkedList = new LinkedList_1.LinkedList();
for (var i = 0; i < 5; i++) {
    linkedList.add(Math.ceil(Math.random() * 100000));
}
linkedList.print();
numbersCollection.sort();
console.log(numbersCollection.data);
characterCollection.sort();
console.log(characterCollection.data);
linkedList.sort();
linkedList.print();
// const sorter: Sorter = new Sorter(numbersCollection);
// const charSorter: Sorter = new Sorter(characterCollection);
// const listSorter: Sorter = new Sorter(linkedList);
// sorter.sort();
// console.log(sorter.collection);
// charSorter.sort();
// console.log(charSorter.collection);
// listSorter.sort();
// linkedList.print();
