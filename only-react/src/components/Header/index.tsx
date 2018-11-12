import './style.css'

interface IProps {
    onChange: (value: string) => void
}
export function Header(props: IProps) {
    return (
        <header className="header">
				<h1>todos</h1>
                {/* TODO: autofocus 暂时去掉  */}
				<input className="new-todo" placeholder="What needs to be done?"  />
			</header>
    )
}