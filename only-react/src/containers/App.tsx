import * as React from 'react';
import { Router } from 'director/build/director'
import './App.css';
import { Header } from '@Components/Header';
import { ToggleAll } from '@Components/ToggleAll';
import { TodoItem } from '@Components/TodoItem';
import { TodoCount } from '@Components/TodoCount';
import { uniqueId } from '@utils';
import { Filters } from '@Components/Filters';

interface ITodo {
    key: string
    value: string
    checked: boolean
    editing: boolean
}

export type IFilter = 'all' | 'active' | 'completed'

interface IState {
    todos: ITodo[]
    filter: IFilter
}

class App extends React.Component<{}, IState> {

    public constructor(props: any) {
        super(props)
        this.state = {
            todos: [],
            filter: 'all',
        }
    }

    public render() {
        return (
            <>
                <section className="todoapp">
                    <Header
                        addTodo={this.addTodo}
                    />
                    <section className="main">

                        <ToggleAll allSelected={this.allSelect} onToggleAll={this.toggleAll} />
                        <ul className="todo-list">
                            {
                                this.state.todos.filter((item) => {
                                    return this.state.filter === 'active' ?
                                        !item.checked :
                                        this.state.filter === 'completed' ?
                                            item.checked :
                                            true
                                }).map((item) => {
                                    return <TodoItem
                                        key={item.key}
                                        value={item.value}
                                        checked={item.checked}
                                        editing={item.editing}
                                        onChange={this.editTodo(item.key)}
                                        onToggle={this.toggleTodo(item.key)}
                                        onEdit={this.edit(item.key)}
                                        onSubmit={this.submit(item.key)}
                                        onRemove={this.removeTodo(item.key)}
                                    />
                                })
                            }

                        </ul>
                    </section>
                    <footer className="footer">

                        <TodoCount count={this.getFilterList().length} />

                        <Filters type={this.state.filter} />

                        <button onClick={this.clear} className="clear-completed">Clear completed</button>
                    </footer>
                </section>
                <footer className="info">
                    <p>Double-click to edit a todo</p>
                    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
                    <p>Created by <a href="http://todomvc.com">galen</a></p>
                    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
                </footer>
            </>
        );
    }

    public componentDidMount() {
        this.setState({
            todos: [
                {
                    key: uniqueId('todo'),
                    value: 'Taste JavaScript',
                    checked: true,
                    editing: false
                },
                {
                    key: uniqueId('todo'),
                    value: 'Buy a unicorn',
                    checked: false,
                    editing: false
                },
            ]
        })

        const setState = this.setState
        const router = Router({
            '/': setState.bind(this, { filter: 'all' }),
            '/active': setState.bind(this, { filter: 'active' }),
            '/completed': setState.bind(this, { filter: 'completed' }),
        })

        router.init()

    }

    private addTodo = (value: string) => {
        if (!value) {
            return
        }
        this.setState({
            todos: this.state.todos.concat({
                key: uniqueId('todo'),
                value,
                checked: false,
                editing: false,
            })
        })
    }

    private removeTodo = (key: string) => {
        return () => {
            const todos = this.state.todos.filter((item) => {
                return item.key !== key
            })

            this.setState({
                todos
            })
        }
    }

    private get allSelect() {
        return this.state.todos.every((item) => {
            return item.checked
        })
    }

    private toggleAll = () => {
        let todos
        if (this.allSelect) {
            todos = this.state.todos.map((item) => {
                return {
                    ...item,
                    checked: false
                }
            })
        } else {
            todos = this.state.todos.map((item) => {
                return {
                    ...item,
                    checked: true
                }
            })
        }

        this.setState({
            todos
        })

    }

    private getFilterList = () => {
        return this.state.todos.filter((item) => {
            return !item.checked
            // return this.state.filter === 'active' ?
            //     !item.checked :
            //     this.state.filter === 'completed' ?
            //         item.checked :
            //         true
        })
    }

    private toggleTodo = (key: string) => {
        return () => {
            const todos = this.state.todos.map((item) => {
                if (item.key === key) {
                    return {
                        ...item,
                        checked: !item.checked,
                    }
                }
                return {
                    ...item
                }
            })
            this.setState({
                todos
            })
        }
    }

    private edit = (key: string) => {
        return () => {
            const todos = this.state.todos.map((item) => {
                if (item.key === key) {
                    return {
                        ...item,
                        editing: true,
                    }
                } else {
                    return {
                        ...item,
                        editing: false
                    }
                }
            })
            this.setState({
                todos
            })
        }
    }

    private submit = (key: string) => {
        return () => {
            const todos = this.state.todos.map((item) => {
                return {
                    ...item,
                    editing: false,
                }
            })
                .filter((item) => {
                    return item.value
                })
            this.setState({
                todos
            })
        }
    }

    private editTodo = (key: string) => {
        return (value: string) => {
            const todos = this.state.todos.map((item) => {
                if (item.key === key) {
                    return {
                        ...item,
                        value,
                    }
                }
                return {
                    ...item
                }
            })

            this.setState({
                todos
            })
        }
    }

    private clear = () => {
        const todos = this.state.todos.filter((item) => {
            return !item.checked
        })
        this.setState({
            todos
        })
    }
}

export default App;
