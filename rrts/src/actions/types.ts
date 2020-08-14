import { FetchTodosAction, DeletetodoAction } from './todos';

export enum ActionTypes {
  fechTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeletetodoAction;
