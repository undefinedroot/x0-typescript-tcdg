import { Model } from '../models/Model';

// use model as the generic constraint
// T (1st generic argument) is the User class
// K (2nd generic argument) is the UserProps interface which Model<K> will use
//  'extends Model<K>' is not seen as one of the arguments when used in a child class
export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(protected parent: Element, protected model: T) {
    this.bindModel();
  }

  abstract template(): string;

  // reference to some element where we want to nest a view
  // then map it to 'regions' property
  regionsMap(): { [key: string]: string } {
    return {};
  }

  // no longer required to be implemented on child class
  // the child class can override this
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  // listen to any change
  // when it changes, we execute render()
  bindModel(): void {
    this.model.on('change', (): void => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMapList = this.eventsMap();
    for (let eventKey in eventsMapList) {
      // separate with ":" and return array
      // array destructuring
      const [eventName, selector] = eventKey.split(':');
      // iterate to find elements to bind event
      // querySelectorAll() is used so that you can pass an id, class, or element as the selector
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMapList[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  // just a default implementation so that child class can choose to implement or not
  onRender(): void {}

  render(): void {
    // delete the existing elements then replace
    this.parent.innerHTML = '';
    // proceed processing the elements to be rendered
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    // view nesting
    this.onRender();
    // append to DOM
    this.parent.append(templateElement.content);
  }
}
