import { connect } from 'react-redux'
import { IStoreState } from "../../../store/reducers";
import { Dispatch } from "redux";
import TodoItem from "../../../components/TodoItem";
import { Actions } from "../../../store/actions";

const mapStateToProps = (state: IStoreState) => {
    return {
        // filterType: state.filterType,
        // todos: state.todos,
    }
}

const mapDispatchToProps = <T extends { index: number }>(dispath: Dispatch, ownProps: T) => ({
    // nothings
    onChangeChecked: () => dispath(Actions.toggleTodo(ownProps.index)),
    onChangeValue: (text: string) => dispath(Actions.changeTodoText({ index: ownProps.index, text })),
    onRemove: () => dispath(Actions.removeTodo(ownProps.index)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoItem)
