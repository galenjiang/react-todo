import * as React from 'react';
import './style.css'
import { ITodo, IVisibilityFilter } from "../../store/reducers";

export interface IProps {
    todos: ITodo[]
    filterType: IVisibilityFilter
    children: (args: ITodo[]) => JSX.Element | JSX.Element[]
}


class TodoList extends React.Component<IProps, {}> {
    public render() {
        const { filterType, todos } = this.props
        const filterTodo = todos.filter((item) => {
            if (filterType === 'all') {
                return true
            } else if (filterType === 'completed') {
                return item.completed
            } else {
                return !item.completed
            }
        })

        return <ul className="todo-list">
            {
                this.props.children(filterTodo)
            }
        </ul>
    }
}


export default TodoList;
