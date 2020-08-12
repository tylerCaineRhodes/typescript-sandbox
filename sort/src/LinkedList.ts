import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public value: number){}
}

export class LinkedList extends Sorter{
  head: Node | null = null;

  add(value: number): void {
    const newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
      return;
    }
    let curr = this.head;

    while(curr.next){
      curr = curr.next
    }
    curr.next = newNode;
  }

  get length(): number {
    if(!this.head) return 0;
    let count = 1;
    let curr = this.head

    while(curr.next){
      count++;
      curr = curr.next
    }
    return count;
  }

  at(i: number): Node  {
    if(!this.head) throw new Error('index doesn\'t exist');

    let counter = 0; 
    let curr: Node | null = this.head;
    while(curr){
      if(counter === i){
        return curr;
      }
      counter++;
      curr = curr.next;
    }
    throw new Error('index out of bounds')
  }

  compare(left: number, right: number): boolean {
    if(!this.head) throw new Error('list is empty');

    return this.at(left).value > this.at(right).value;
  }

  swap(left: number, right: number): void {
    const leftNode = this.at(left);
    const rightNode = this.at(right);

    [leftNode.value, rightNode.value] = [rightNode.value, leftNode.value];
  }

  print(): void {
    if(!this.head) return;

    let curr: Node | null = this.head;

    while(curr){
      console.log(curr.value)
      curr = curr.next
    }
  }
}