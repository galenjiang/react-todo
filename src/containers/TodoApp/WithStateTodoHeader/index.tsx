import { connect } from 'react-redux'
import TodoHeader from "../../../components/TodoHeader";
import { Dispatch } from "redux";
import { IStoreState } from "../../../store/reducers";
import { Actions } from "../../../store/actions";

const mapStateToProps = (state: IStoreState) => ({
    // nothing
})

const mapDispatchToProps = (dispath: Dispatch) => ({
    addTodo: (text: string) => dispath(Actions.addTodoDelay(text))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoHeader)
