import { IAction, IWithPayloadAction, ActionUnion, actionCreator } from './utils'
import { IVisibilityFilter } from '../reducers'


export enum actionType {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    CHANGE_TODO_TEXT = 'CHANGE_TODO_TEXT',
    TOGGLE_ALL_TODO = 'TOGGLE_ALL_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    REMOVE_COMPLETED = 'REMOVE_COMPLETED',

    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}





export const Actions = {
    addTodo: (text: string) => actionCreator(actionType.ADD_TODO, text),
    changeTodoText: (payload: { index: number, text: string }) => actionCreator(actionType.CHANGE_TODO_TEXT, payload),
    removeCompleted: () => actionCreator(actionType.REMOVE_COMPLETED),
    removeTodo: (index: number) => actionCreator(actionType.REMOVE_TODO, index),
    toggleAllTodo: () => actionCreator(actionType.TOGGLE_ALL_TODO),
    toggleTodo: (index: number) => actionCreator(actionType.TOGGLE_TODO, index),

    setVisibilityFilter: (type: IVisibilityFilter) => actionCreator(actionType.SET_VISIBILITY_FILTER, type)
}

export type IActionInstance = ActionUnion<typeof Actions>




