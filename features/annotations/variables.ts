let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true; 
let nothingMuch: null = null; 
let nothing: undefined = undefined; 
//obj
let now: Date = new Date();
// array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];
//classes 
class Car {

}

let car: Car = new Car();

//object literal
let point: { x: number; y: number} = {
  x: 10,
  y: 20
}

//function 
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};