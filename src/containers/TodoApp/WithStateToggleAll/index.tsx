import { connect } from 'react-redux'
import { IStoreState } from "../../../store/reducers";
import { Dispatch } from "redux";
import TodoToggleAll from "../../../components/TodoToggleAll";
import { Actions } from "../../../store/actions";

const mapStateToProps = (state: IStoreState) => {
    const len = state.todos.filter((todo) => {
        return !todo.completed
    }).length
    return {
        isAllCompleted: len === 0
    }
}


const mapDispatchToProps = (dispath: Dispatch) => ({
    toggleAll: () => dispath(Actions.toggleAllTodo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoToggleAll)
