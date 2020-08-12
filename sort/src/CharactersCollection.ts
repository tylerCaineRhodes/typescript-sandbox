import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter  {
  constructor(public data: string){
    super();
  }

  get length(): number {
    return this.data.length
  }

  compare(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }

  swap(i: number, j: number): void {
    const characters = this.data.split('');
    [characters[i], characters[j]] = [characters[j], characters[i]];

    this.data = characters.join('');
  }
}
