import {
  CREATE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
  CLEAR_DONE_TASK
} from "../action/actionType";
let initialState = {
  taskList: [],
  editTask: { taskName: "", taskId: "" }
};
const tasks = (state = initialState, actions) => {
  switch (actions.type) {
    case CREATE_TASK:
      return Object.assign({}, state, {
        taskList: [...state.taskList, actions.payload]
      });
    case EDIT_TASK:
      return Object.assign({}, state, {
        editTask: { ...state.editTask, ...actions.payload }
      });
    case UPDATE_TASK:
      return Object.assign({}, state, {
        taskList: state.taskList.map(task =>
          task.taskId === actions.payload.taskId ? actions.payload : task
        )
      });
    case CLEAR_DONE_TASK:
      return Object.assign({}, state, {
        taskList: actions.payload
      });
    default:
      return state;
  }
};

export default tasks;
