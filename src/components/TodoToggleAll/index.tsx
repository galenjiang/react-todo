import * as React from 'react';
import './style.css'

interface IProps {
    isAllCompleted: boolean
    toggleAll: () => void
}

class TodoToggleAll extends React.Component<IProps, {}> {
    public render() {
        const { isAllCompleted, toggleAll } = this.props
        return <>
            <input checked={isAllCompleted} onChange={toggleAll} id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all as complete</label>
        </>
    }
}

export default TodoToggleAll
