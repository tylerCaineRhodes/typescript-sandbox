import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('hero worm')
  fly(): void {
    console.log('vrrrrrr')
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  }
}

//need the protype of plane because we are trying to iterate over the class itself instead of simply referencing a property
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype){
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret)
  }
}

// function markFunction(target: Plane, key: string) {
//   Reflect.defineMetadata('secret', 123, target, key);
// }

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

// console.log(secret);


// const plane = {
//   color: 'red'
// };

//associating data with a specific property 
  // Reflect.defineMetadata('note', 'hi there', plane, 'color');
  // const note = Reflect.getMetadata('note', plane, 'color');

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);
// 
// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// 
// console.log(note)
// console.log(height)