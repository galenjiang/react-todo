import * as React from 'react';
import './style.css'
import c from 'classnames'
import { ChangeEvent } from "react";


export interface IProps {
    label: string
    checked: boolean
    onChangeChecked: (...args: any[]) => void
    onChangeValue: (name: string) => void
    onRemove: (...args: any[]) => void
}

interface IState {
    editing: boolean
}

class TodoItem extends React.Component<IProps, IState> {

    private input: React.RefObject<HTMLInputElement>

    constructor(props: any) {
        super(props)
        this.state = {
            editing: false
        }


        this.input = React.createRef()
    }

    public render() {
        const { label, checked, onRemove } = this.props
        const { editing } = this.state
        return <li className={c({ completed: checked, editing })}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={ checked } onChange={this.changeChecked} />
                <label onDoubleClick={this.editing}>{ label }</label>
                <button className="destroy" onClick={onRemove} />
            </div>
            <input ref={this.input} className="edit" onChange={this.changeName} defaultValue={label} onBlur={this.exitEditing} onKeyDown={this.onEnter}/>
        </li>
    }

    public componentDidUpdate (prevProps: IProps, prevState: IState) {
        if (!prevState.editing && this.state.editing) {

            this.input.current!.focus()
        }
    }

    private changeChecked = () => {
        console.log('changed')
        this.props.onChangeChecked()
    }

    private changeName = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChangeValue(e.target.value)
    }

    private editing = (e: React.MouseEvent) => {
        e.preventDefault()
        this.setState({
            editing: true
        })
        return false
    }

    private exitEditing = (e: any) => {
        this.setState({
            editing: false
        })
    }

    private onEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            this.setState({
                editing: false
            })

            this.input.current!.blur()
        }
    }
}

export default TodoItem;
