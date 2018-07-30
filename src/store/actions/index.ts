import { ActionUnion, actionCreator } from './utils'
import { IVisibilityFilter } from '../reducers'
import { map, delay } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Observable } from "rxjs/internal/Observable";


export enum actionType {
    ADD_TODO = 'ADD_TODO',
    ADD_TODO_DELAY = 'ADD_TODO_DELAY',
    TOGGLE_TODO = 'TOGGLE_TODO',
    CHANGE_TODO_TEXT = 'CHANGE_TODO_TEXT',
    TOGGLE_ALL_TODO = 'TOGGLE_ALL_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    REMOVE_COMPLETED = 'REMOVE_COMPLETED',

    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}


export const Actions = {
    addTodo: (text: string) => actionCreator(actionType.ADD_TODO, text),
    addTodoDelay: (text: string) => actionCreator(actionType.ADD_TODO_DELAY, text),
    changeTodoText: (payload: { index: number, text: string }) => actionCreator(actionType.CHANGE_TODO_TEXT, payload),
    removeCompleted: () => actionCreator(actionType.REMOVE_COMPLETED),
    removeTodo: (index: number) => actionCreator(actionType.REMOVE_TODO, index),
    toggleAllTodo: () => actionCreator(actionType.TOGGLE_ALL_TODO),
    toggleTodo: (index: number) => actionCreator(actionType.TOGGLE_TODO, index),

    setVisibilityFilter: (type: IVisibilityFilter) => actionCreator(actionType.SET_VISIBILITY_FILTER, type)
}

export type IActionInstance = ActionUnion<typeof Actions>

export function epic(action$: Observable<IActionInstance>):Observable<IActionInstance> {
    return action$.pipe(
        ofType<ReturnType<typeof Actions.addTodoDelay>>(actionType.ADD_TODO_DELAY),
        delay(1000),
        map((action) => {
            return Actions.addTodo(action.payload)
        }),
    );
}