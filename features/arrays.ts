const carMakers = ['ford', 'toyota', 'chevy'];
const carMakersEmpty: string[] = [];

const dates = [new Date(), new Date()];
const datesEmpty: Date[] = [];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];
const carsByMakeEmpty: string[][] = [];

//help with inference when
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
carMakers.push(100);

//help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types 
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('string');
importantDates.push(new Date());
