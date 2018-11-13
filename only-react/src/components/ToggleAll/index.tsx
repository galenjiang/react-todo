import * as React from 'react'
import './style.css'


interface IProps {
    onToggleAll: () => void
    allSelected: boolean
}
export function ToggleAll(props: IProps) {

    return <>
        <input id="toggle-all" className="toggle-all" type="checkbox" checked={props.allSelected}  onChange={props.onToggleAll} />,
        <label htmlFor="toggle-all">Mark all as complete</label>
    </>
}