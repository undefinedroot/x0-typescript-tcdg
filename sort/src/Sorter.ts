// data structure / type signature
// that needs to be satisfied
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// note: you can remove the use of interface here.
export abstract class Sorter implements Sortable {
  // abstract = mark properties/methods that will exist in the future
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  // Bubble Sort, highest value bubbles up to the right side
  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
