import * as React from 'react';
import './style.css'

interface IProps {
    addTodo: (name: string) => void
    name: string
}

interface IState {
    value: string
}

class TodoHeader extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props)

        this.state = {
            value: ''
        }
    }

    public render() {
        const { value } = this.state

        return <header className="header">
            <h1>{ this.props.name }</h1>
            <input value={value} onChange={this.onInputChange} className="new-todo" placeholder="What needs to be done?" onKeyDown={this.addTodo}/>
        </header>
    }

    private addTodo = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13 && this.state.value) {
            this.props.addTodo(this.state.value)
            this.setState({
                value: ''
            })
        }
    }

    private onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value || ''
        })
    }
}

export default TodoHeader;
