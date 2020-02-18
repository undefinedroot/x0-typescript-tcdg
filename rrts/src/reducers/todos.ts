import { Todo, TodoActions, TodoReducerActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: TodoActions) => {
  // this serves as an implicit type guard
  // 'action' has different types depending on the case
  switch (action.type) {
    case TodoReducerActionTypes.FETCH_TODOS:
      return action.payload;
    case TodoReducerActionTypes.DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
