import * as React from 'react';
import c from 'classnames'
import './style.css'
import { IVisibilityFilter } from "../../store/reducers";

interface IProps {
    incompleteLength: number
    removeCompleted: () => void
    filterType: IVisibilityFilter
}

class TodoFooter extends React.Component<IProps, {}> {
    public render() {

        const { incompleteLength, removeCompleted, filterType } = this.props

        return <footer className="footer">
            <span className="todo-count"><strong>{incompleteLength}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className={c({selected: filterType === 'all'})} href="#/">All</a>
                </li>
                <li>
                    <a className={c({selected: filterType === 'active'})} href="#/active">Active</a>
                </li>
                <li>
                    <a className={c({selected: filterType === 'completed'})} href="#/completed">Completed</a>
                </li>
            </ul>
            <button onClick={removeCompleted} className="clear-completed">Clear completed</button>
        </footer>
    }
}

export default TodoFooter;
