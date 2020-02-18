import axios, { AxiosPromise } from 'axios';

// use Generic Constraints to guarantee that the class
// has a specific property present, you use interface to do this.
// more like an additional rule, using 'extends' keyword
interface HasId {
  id?: number;
}

// important to return a 'Promise' in order to
// determine the result of an executed axios method
// implement generic type which the save() method will depend upon
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`);
  };

  save = (data: T): AxiosPromise => {
    // Generic Constraints will allow this.
    // because we have an optional property and we created a tsconfig, then we get number | null
    // instead of only number type
    const { id } = data;

    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post
      return axios.post(this.rootUrl, data);
    }
  };
}
