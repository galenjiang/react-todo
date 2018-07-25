import * as React from 'react';
import c from 'classnames'
import './style.css'

export type IShow = 'all' | 'active' | 'completed'

interface IProps {
    incompleteLength: number
    clearCompleted: () => void
    nowShowing: IShow
}

class TodoFooter extends React.Component<IProps, {}> {
    public render() {

        const { incompleteLength, clearCompleted, nowShowing } = this.props

        return <footer className="footer">
            <span className="todo-count"><strong>{incompleteLength}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className={c({selected: nowShowing === 'all'})} href="#/">All</a>
                </li>
                <li>
                    <a className={c({selected: nowShowing === 'active'})} href="#/active">Active</a>
                </li>
                <li>
                    <a className={c({selected: nowShowing === 'completed'})} href="#/completed">Completed</a>
                </li>
            </ul>
            <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
        </footer>
    }
}

export default TodoFooter;
