import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// describes the entire state inside the redux store
export interface StoreState {
  todos: Todo[];
}

// add type for combineReducers generic function
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
