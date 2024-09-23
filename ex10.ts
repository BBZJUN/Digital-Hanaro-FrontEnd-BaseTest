class Collection<T> {
  protected readonly arr = Array<T>();

  constructor(...args: T[]) {
    this.arr.push(...args);
  }

  get _arr() {
    return this.arr;
  }

  push(...args: T[]) {
    this.arr.push(...args);
    return this.arr;
  }

  get peek(): T | undefined {
    return this.isQueue() ? this.arr[0] : this.arr.at(-1);
  }

  get poll(): T | undefined {
    return this.isQueue() ? this.arr.shift() : this.arr.pop();
  }

  remove() {
    return this.poll;
  }

  get length() {
    return this.arr.length;
  }

  get isEmpty() {
    return !this.arr.length;
  }

  clear() {
    this.arr.length = 0;
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  // [1, 2, 3]
  *[Symbol.iterator]() {
    for (let i = this.length - 1; i >= 0; i -= 1) {
      yield this.toArray()[i];
    }
  }

  toArray() {
    return this.isQueue() ? this.arr.toReversed() : this.arr;
  }

  print() {
    console.log(`<${this.constructor.name}: [${this.toArray()}]>`);
  }

  private isQueue() {
    return this instanceof Queue;
  }
}

class Stack<T> extends Collection<T> {}
class Queue<T> extends Collection<T> {}
class ArrayList<T> extends Collection<T> {
  protected arr: T[] = []; 

  constructor(...args: T[]) {
    super();
    this.arr = [...args]; 
  }

  add(value: T, index?: number): void {
    if (index === undefined) {
      this.arr.push(value);
    } 
    else {
      this.arr.splice(index, 0, value);
    }
  }

  get(index: number): T {
    return this.arr[index];
  }

  remove(value?: T): T | undefined {
  if (value === undefined) {
    return super.remove();
  }

  const index = this.arr.indexOf(value);
  if (index !== -1) {
    const removedItem = this.arr[index];
    this.arr.splice(index, 1); 
    return removedItem;
  }
  return undefined;
}

  set(index: number, value: T): void {
    this.arr[index] = value;
  }

  contains(value: T): boolean {
    return this.arr.includes(value);
  }

  indexOf(value: T): number {
    return this.arr.indexOf(value);
  }

  get size(): number {
    return this.arr.length;
  }

  get isEmpty(): boolean {
    return this.arr.length === 0;
  }

  toArray(): T[] {
    return [...this.arr];
  }

  clear(): void {
    this.arr.length = 0;
  }

  *[Symbol.iterator](): Generator<T, void, unknown> {
    for (let i = 0; i < this.arr.length; i++) {
      yield this.arr[i];
    }
  }

    toString(): string {
      if (this.isEmpty)
        return 'all clear';

    const listToStr = (arr: T[], index: number): string => {
      if (index >= arr.length) return 'undefined';
      const currentValue = arr[index];
      const restString = listToStr(arr, index + 1);
      return `{ value: ${currentValue}, rest: ${restString} }`;
    };

    return `ArrayList(${this.size}) ${listToStr(this._arr, 0)}`;
  }

}

export { Stack, Queue, ArrayList };