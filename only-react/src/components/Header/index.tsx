import * as React from 'react'
import './style.css'


interface IProps {
    addTodo: (value: string) => void
}
export function Header(props: IProps) {
    const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            props.addTodo(e.currentTarget.value.trim())
            e.currentTarget.value = ''
        }
    }

    // const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.currentTarget.value)
    // }
    return (
        <header className="header">
				<h1>todos</h1>
                {/* TODO: autofocus 暂时去掉  */}
				<input className="new-todo" placeholder="What needs to be done?"  onKeyUp={addTodo}/>
			</header>
    )
}