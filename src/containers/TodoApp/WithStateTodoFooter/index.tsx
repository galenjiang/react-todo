import { connect } from 'react-redux'
import { IStoreState } from "../../../store/reducers";
import { Dispatch } from "redux";
import { Actions } from "../../../store/actions";
import TodoFooter from "../../../components/TodoFooter";

const mapStateToProps = (state: IStoreState) => {
    const len = state.todos.filter((todo) => {
        return !todo.completed
    }).length
    return {
        filterType: state.filterType,
        incompleteLength: len
    }
}


const mapDispatchToProps = (dispath: Dispatch) => ({
    removeCompleted: () => dispath(Actions.removeCompleted())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoFooter)
