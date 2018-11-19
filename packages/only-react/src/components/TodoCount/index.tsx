import * as React from 'react'
import './style.css'


interface IProps {
    count: number
}
export function TodoCount(props: IProps) {
    return (
        <span className="todo-count"><strong>{props.count}</strong> item left</span>
    )
}