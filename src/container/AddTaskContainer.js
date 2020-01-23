import { connect } from "react-redux";
import AddTask from "../component/AddTask";
import { createTask, updateTask } from "../redux/action/actions";
const mapStateToProps = ({ tasks }) => {
  // console.log("----", tasks);
  const taskList = (tasks && tasks.taskList) || [];
  return { taskList };
};
const mapDispatchToProps = dispatch => ({
  createTask: data => dispatch(createTask(data)),
  updateTask: data => dispatch(updateTask(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
