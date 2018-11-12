import * as React from 'react'
import { Router } from 'director/build/director'
import TodoHeader from '../../components/TodoHeader'
import TodoFooter from '../../components/TodoFooter'
import TodoList from '../../components/TodoList'
import TodoItem from '../../components/TodoItem'
import AppFooter from '../../components/AppFooter'
import TodoToggleAll from "../../components/TodoToggleAll";
import { getUuid } from "../../utils";
import './style.css'


export type IType = 'all' | 'completed' | 'active'

export interface ITodoItem {
    name: string
    key: string
    done: boolean
}

interface IState {
    todo: ITodoItem[]
    filterType: IType
}

class App extends React.Component<{}, IState> {

    constructor(props: any) {
        super(props)

        this.state = {

            filterType: 'all',
            todo: [
                {
                    done: true,
                    key: getUuid(),
                    name: 'Taste Javascript'
                },
                {
                    done: true,
                    key: getUuid(),
                    name: 'Buy a unicorn'
                },
            ],
        }
    }

    public render() {
        const { filterType, todo } = this.state


        return <>
            <section className="todoapp">
                <TodoHeader name="todos" addTodo={this.addTodo}/>
                <section className="main">
                    {
                        todo.length !== 0
                        && <TodoToggleAll allCompleted={this.allCompleted} toggleAll={this.toggleAll}/>
                    }
                    <TodoList todo={ todo } type={ filterType }>
                        {
                            (list: ITodoItem[]) => {
                                return list.map((todoItem: ITodoItem, index: number) => {
                                    return <TodoItem key={todoItem.key} label={todoItem.name} checked={todoItem.done} onRemove={this.removeTodo.bind(this, index)} onChangeChecked={this.toggleTodo.bind(this, index)} onChangeValue={this.changeName.bind(this, index)} />
                                })
                            }
                        }
                    </TodoList>

                </section>
                <TodoFooter filterType={filterType} incompleteLength={this.incompleteTodoLength} clearCompleted={this.clearCompleted}/>
            </section>
            <AppFooter/>
        </>;
    }

    public componentDidMount() {

        const setState = this.setState
        const router = Router({
            '/': setState.bind(this, { filterType: 'all' }),
            '/active': setState.bind(this, { filterType: 'active' }),
            '/completed': setState.bind(this, { filterType: 'completed' }),
        })

        router.init()
    }

    get allCompleted() {
        return this.incompleteTodoLength === 0
    }

    get incompleteTodoLength() {
        return this.state.todo.filter((item) => {
            return !item.done
        }).length
    }

    private toggleTodo(index: number) {
        const todoItem = this.state.todo[index]
        todoItem.done = !todoItem.done
        this.setState({
            todo: this.state.todo
        })
    }

    private changeName(index: number, name: string) {
        const todoItem = this.state.todo[index]
        todoItem.name = name
        this.setState({
            todo: this.state.todo
        })
    }

    private addTodo = (name: string) => {
        const { todo } = this.state
        todo.push({
            done: false,
            key: getUuid(),
            name,
        })
        this.setState({
            todo
        })
    }

    private removeTodo(index: number) {
        const todo = this.state.todo.filter((_: any, i) => {
            return i !== index
        })
        this.setState({
            todo
        })
    }

    private toggleAll = () => {
        if (this.allCompleted) {
            const todo = this.state.todo.map((item) => {
                return {
                    done: false,
                    key: item.key,
                    name: item.name,
                }
            })
            this.setState({
                todo
            })
        } else {
            const todo = this.state.todo.map((item) => {
                return {
                    done: true,
                    key: item.key,
                    name: item.name,
                }
            })
            this.setState({
                todo
            })
        }
    }

    private clearCompleted = () => {
        const todo = this.state.todo.filter((item) => {
            return !item.done
        })
        this.setState({
            todo
        })
    }
}

export default App;
