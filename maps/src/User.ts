import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  color: string = 'red';

  location: {
    lat: number,
    lng: number
  };

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude())
    };
  }

  markerContent = (): string => {
   return `User Name: ${this.name}`
  }
}
