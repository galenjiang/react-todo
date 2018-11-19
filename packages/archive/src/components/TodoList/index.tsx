import * as React from 'react';
import './style.css'
import { ITodoItem, IType } from '../../containers/Todo'

export interface IProps {
    todo: ITodoItem[]
    type: IType
    children: (args: ITodoItem[]) => JSX.Element | JSX.Element[]
}


class TodoList extends React.Component<IProps, {}> {
    public render() {
        const { type, todo } = this.props
        const filterTodo = todo.filter((item) => {
            if (type === 'all') {
                return true
            } else if (type === 'completed') {
                return item.done
            } else {
                return !item.done
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
