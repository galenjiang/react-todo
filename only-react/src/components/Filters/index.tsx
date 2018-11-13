import * as React from 'react'
import c from 'classnames'
import { IFilter } from '@Containers/App'
import './style.css'

interface IProps {
    type: IFilter
}


export const Filters = (props: IProps) => {
    return (<ul className="filters">
        <li>
            <a className={c({ "selected": props.type === 'all' })} href="#/">All</a>
        </li>
        <li>
            <a className={c({ "selected": props.type === 'active' })} href="#/active">Active</a>
        </li>
        <li>
            <a className={c({ "selected": props.type === 'completed' })} href="#/completed">Completed</a>
        </li>
    </ul>)
}