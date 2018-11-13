import * as React from 'react'
import c from 'classnames'
import './style.css'

const ESCAPE_KEY = 27
const ENTER_KEY = 13

interface IProps {
    value: string
    checked: boolean
    editing: boolean
    onChange: (value: string) => void
    onToggle: () => void
    onEdit: () => void
    onSubmit: () => void
    onRemove: () => void
}
export class TodoItem extends React.PureComponent<IProps> {

    private input: React.RefObject<HTMLInputElement>
    public constructor(props: IProps) {
        super(props)

        this.input = React.createRef()
    }

    public render() {
        return <li
            className={c({ "completed": this.props.checked, "editing": this.props.editing })}
        >
            <div className="view">
                <input className="toggle" type="checkbox" checked={this.props.checked} onChange={this.props.onToggle} />
                <label
                    onDoubleClick={this.props.onEdit}
                >{this.props.value}</label>
                <button 
                className="destroy" 
                onClick={this.props.onRemove}
                />
            </div>
            <input
                ref={this.input}
                className="edit"
                onChange={this.onChange}
                value={this.props.value}
                onBlur={this.props.onSubmit}
                onKeyUp={this.onKeyUp}
            />
        </li>
    }

    public componentDidUpdate(prevProps: IProps) {
        if (!prevProps.editing && this.props.editing) {
            if (this.input.current) {
                this.input.current.focus()
            }
        }
    }


    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.target.value.trim())
    }


    private onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === ENTER_KEY || e.keyCode === ESCAPE_KEY) {
            this.props.onSubmit()
        }
    }
}