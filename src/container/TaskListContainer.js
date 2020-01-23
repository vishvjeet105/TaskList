import { connect } from "react-redux";
import TaskList from "../component/TaskList";
import { editTask, updateTask, clearDoneTask } from "../redux/action/actions";
const mapStateToProps = ({ tasks }) => {
  const taskList = tasks.taskList || [];
  return { taskList };
};
const mapDispatchToProps = dispatch => ({
  editTask: data => dispatch(editTask(data)),
  updateTask: data => dispatch(updateTask(data)),
  clearDoneTask: data => dispatch(clearDoneTask(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
