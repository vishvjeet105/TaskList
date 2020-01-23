import React from "react";
import "./index.css";
import { connect } from "react-redux";
class AddTask extends React.Component {
  today = new Date();
  dd = String(this.today.getDate()).padStart(2, "0");
  mm = String(this.today.getMonth() + 1).padStart(2, "0"); //January is 0!
  yyyy = this.today.getFullYear();

  today = this.mm + "/" + this.dd + "/" + this.yyyy;
  state = {
    taskName: "",
    createdDate: this.today
  };
  handleChange = event => {
    this.setState({
      taskName: event.target.value
    });
  };
  handleClick = event => {
    this.setState({
      createdDate: event.target.value
    });
  };
  handleCreateAndUpdate = () => {
    console.log("props task", this.props);
    if (this.state.taskName !== "") {
      if (this.props.editTask.taskName === "") {
        this.props.createTask({
          taskName: this.state.taskName,
          createdDate: this.state.createdDate,
          status: "undone"
        });
      } else {
        this.props.updateTask({
          taskName: this.state.taskName,
          createdDate: this.state.createdDate,
          status: "undone",
          taskId: this.props.editTask.taskId
        });
      }
    }
    this.props.history.push("/list");
  };
  render() {
    console.log(this.state, this.props);
    return (
      <div className="addtask-component">
        <div className="addtask-container">
          <label>Task Name</label>
          <div>
            <input
              name="Task"
              component="input"
              type="text"
              placeholder="Here define your task"
              onChange={this.handleChange}
              defaultValue={this.props.editTask.taskName || ""}
            />
          </div>
          <label>Create Date</label>
          <div>
            <input name="date" type="date" onChange={this.handleClick} />
          </div>
        </div>
        <div className="cancel-create-btn">
          <button className="cancel-btn">CANCEL</button>
          <button className="create-btn" onClick={this.handleCreateAndUpdate}>
            CREATE
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ tasks }) => {
  return { editTask: tasks.editTask || "" };
};
export default connect(
  mapStateToProps,
  null
)(AddTask);
