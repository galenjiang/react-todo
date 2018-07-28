import { connect } from 'react-redux'
import { IStoreState } from "../../../store/reducers";
import { Dispatch } from "redux";
import TodoList from "../../../components/TodoList";

const mapStateToProps = (state: IStoreState) => {
    return {
        filterType: state.filterType,
        todos: state.todos,
    }
}

const mapDispatchToProps = (dispath: Dispatch) => ({
    // nothings
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)
