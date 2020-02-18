import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoReducerActionTypes } from './types';

// providing the type which axios.get() will have to return
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// enforcing type of arguments to be passed in generic dispatch()
export interface FetchTodosAction {
  type: TodoReducerActionTypes.FETCH_TODOS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: TodoReducerActionTypes.DELETE_TODO;
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  // provide the correct type to dispatch argument
  return async (dispatch: Dispatch) => {
    // .get() is a generic function, so just add the type
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: TodoReducerActionTypes.FETCH_TODOS,
      payload: response.data
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: TodoReducerActionTypes.DELETE_TODO,
    payload: id
  };
};
