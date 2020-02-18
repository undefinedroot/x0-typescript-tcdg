import { FetchTodosAction, DeleteTodoAction } from './todos';

// NOTE: we don't need to define a string value,
// actions needs to be just a unique value
export enum TodoReducerActionTypes {
  FETCH_TODOS,
  DELETE_TODO
}

// type alias with type union between all types
export type TodoActions = FetchTodosAction | DeleteTodoAction;
