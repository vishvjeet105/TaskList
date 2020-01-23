import React, { Component } from "react";
import "./index.css";
class TaskLisk extends Component {
  handleAddTask = () => {
    this.props.editTask({ taskName: "", taskId: "" });
    this.props.history.push("/add-task");
  };
  handleEdit = (taskName, taskId) => {
    this.props.editTask({ taskName, taskId });
    this.props.history.push("/add-task");
  };
  handleDone = (taskName, taskId, taskDate) => {
    this.props.updateTask({ taskName, taskId, taskDate, status: "done" });
  };
  clearDoneTask = () => {
    const taskList =
      this.props.taskList.length &&
      this.props.taskList.filter(task => task.status !== "done");
    if (this.props.taskList.length !== taskList.length) {
      console.log("enter");
      this.props.clearDoneTask(taskList);
    }
  };
  render() {
    console.log("+++", this.props);
    return (
      <div className="tasklist-component">
        <div className="tasklist-link-btn">
          <div className="tasklist-btn">
            <button className="add-btn" onClick={this.handleAddTask}>
              ADD TASK
            </button>
          </div>
          <div className="tasklist-link" onClick={this.clearDoneTask}>
            Clear all the done task
          </div>
        </div>
        <div className="tasklist-line" />
        <div className="tasklist-container">
          <div className="static-row">
            <div className="static-column-number">#</div>
            <div className="static-task-name">Task Name</div>
            <div className="static-status">status</div>
            <div className="static-action">action</div>
          </div>
          {this.props.taskList.length ? (
            this.props.taskList.map((task, i) => {
              return (
                <div className="dynamic-row" key={task.taskId}>
                  <div className="dynamic-column-number">{i + 1}</div>
                  <div className="dynamic-task-name">{task.taskName}</div>
                  <div className="dynamic-status">{task.status}</div>
                  <div className="dynamic-action">
                    <button
                      className="edit-btn"
                      onClick={() =>
                        this.handleEdit(task.taskName, task.taskId)
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="done-btn"
                      onClick={() =>
                        this.handleDone(
                          task.taskName,
                          task.taskId,
                          task.taskDate
                        )
                      }
                    >
                      Done
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Task is there</div>
          )}
        </div>
      </div>
    );
  }
}

export default TaskLisk;
