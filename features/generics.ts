class ArrayOfNumbers {
  constructor(public collection: number[]){}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrrayOfAnything<T>{
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrrayOfAnything<string>(['a', 'b', 'c']);

//example of generics with functions

function printStrings(arr: string[]): void {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNums(arr: number[]): void {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything <T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

//Generic constraints

class Car {
  print(){
    console.log('I am a car')
  }
}

class House {
  print(){
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for(let i = 0; i < arr.length; i++){
    arr[i].print()
  }
}

printHousesOrCars<House | Car>([new House(), new House()]);