import * as React from 'react'
import { Router } from 'director/build/director'
import WithAddTodoHeader from './WithStateTodoHeader'
import WithStateTodoFooter from './WithStateTodoFooter'
import WithStateTodoList from './WithStateTodoList'
import WithStateTodoItem from './WithStateTodoItem'
import AppFooter from '../../components/AppFooter'
import WithStateToggleAll from "./WithStateToggleAll";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import './style.css'
import { IStoreState, ITodo, IVisibilityFilter } from "../../store/reducers";
import { Actions } from "../../store/actions";




interface IProps {
    len: number
    changeFilterType: typeof Actions.setVisibilityFilter
}


class App extends React.Component<IProps, any> {

    constructor(props: any) {
        super(props)
    }

    public render() {
        const { len } = this.props

        return <>
            <section className="todoapp">
                <WithAddTodoHeader name={'todos'} />
                <section className="main">
                    {
                        len !== 0
                        && <WithStateToggleAll/>
                    }

                    <WithStateTodoList>
                        {
                            (list: ITodo[]) => {
                                return list.map((todo: ITodo, index: number) => {
                                    return <WithStateTodoItem key={todo.key} index={index} label={todo.text} checked={todo.completed} />
                                })
                            }
                        }
                    </WithStateTodoList>

                </section>
                <WithStateTodoFooter />
            </section>
            <AppFooter/>
        </>;
    }

    public componentDidMount() {
        const { changeFilterType } = this.props
        const router = Router({
            '/': () => changeFilterType('all'),
            '/active': () => changeFilterType('active'),
            '/completed': () => changeFilterType('completed'),
        })

        router.init()
    }
}


const mapStateToProps = (state: IStoreState) => {
    return {
        len: state.todos.length
    }
}

const mapDispatchToProps = (dispath: Dispatch) => ({
    changeFilterType(type: IVisibilityFilter) {
        dispath(Actions.setVisibilityFilter(type))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
