import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

// T = type of model we are passing in
// K = interface that specifies the different properties that model T will have
export class Collection<T, K> {
  models: T[] = []; // we store type 'T' array
  events: Eventing = new Eventing();

  // deserialize take in some data and convert, we take argument of 'K' type and return 'T' type
  constructor(private rootUrl: string, private deserialize: (json: K) => T) {}

  // can't use shortcut if we are instantiating it inline
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse): void => {
      response.data.forEach((value: K): void => {
        // let an outside function do the conversion
        this.models.push(this.deserialize(value));
      });
      this.trigger('change');
    });
  }
}
