// Type Alias
type Callback = () => void; // if you want to return an object, it should be '() => {}' instead.

export class Eventing {
  // an object that has a property (event) with an array of callback functions
  events: { [key: string]: Callback[] } = {};

  // callback is annotated as a function using Type Alias
  on = (eventName: string, callback: Callback): void => {
    // event name or empty array
    // either use the existing event and append to it, or create a new one
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  // event trigger
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => {
      callback();
    });
  };
}
