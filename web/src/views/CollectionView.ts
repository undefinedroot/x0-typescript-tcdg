import { Collection } from '../models/Collection';

// generic abstract class
export abstract class CollectionView<T, K> {
  abstract renderItem(model: T, itemParent: Element): void;

  constructor(private parent: Element, private collection: Collection<T, K>) {}

  render(): void {
    this.parent.innerHTML = '';
    // big list of views
    const templateElement = document.createElement('template');
    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      // build up list
      templateElement.content.append(itemParent);
      // append template to parent
      this.parent.append(templateElement.content);
    }
  }
}
