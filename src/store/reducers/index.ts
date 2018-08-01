import { actionType, IActionInstance } from '../actions'
import { getUuid } from "../../utils";
import { combineReducers } from 'redux'

export type IVisibilityFilter = 'all' | 'completed' | 'active'

export interface ITodo {
    completed: boolean
    key: string
    text: string
}


export interface IStoreState {
    todos: ITodo[]
    filterType: IVisibilityFilter
}


function todos(state: ITodo[] = [
    {
        completed: true,
        key: getUuid(),
        text: 'Taste Javascript'
    },
    {
        completed: false,
        key: getUuid(),
        text: 'Buy a unicorn'
    },
], action: IActionInstance) {
    switch(action.type) {
        case actionType.ADD_TODO:
            return [
                ...state,
                {
                    completed: false,
                    key: getUuid(),
                    text: action.payload
                }
            ]
        case actionType.TOGGLE_TODO:
            return state.map((todo: ITodo, index: number) => {
                if (index === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return {
                    ...todo,
                }
            })
        case actionType.CHANGE_TODO_TEXT:

            return state.map((todo, index) => {
                if (index === action.payload.index) {
                    return {
                        ...todo,
                        text: action.payload.text,
                    }
                } else {
                    return {
                        ...todo
                    }
                }
            })
        case actionType.TOGGLE_ALL_TODO:

            // incomplete task length
            const len = state.filter((todo) => {
                return !todo.completed
            }).length


            // 有一个未完成， 切换为都完成，或者都完成切换成都没有完成
            if (len > 0) {
                return state.map((todo: ITodo) => {
                    return {
                        ...todo,
                        completed: true
                    }
                })
            } else {
                return state.map((todo: ITodo) => {
                    return {
                        ...todo,
                        completed: false
                    }
                })
            }

        case actionType.REMOVE_TODO:
            return state.filter((todo: ITodo, index: number) => {
                return action.payload !== index;

            })

        case actionType.REMOVE_COMPLETED:
            return state.filter((todo: ITodo) => {
                return !todo.completed
            })
        default:
            return state
    }
}



function filterType(state: IVisibilityFilter = 'all', action: IActionInstance) {
    switch (action.type) {
        case actionType.SET_VISIBILITY_FILTER:
            return action.payload
        default:
            return state
    }
}


export default combineReducers({
    filterType,
    todos,
})