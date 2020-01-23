import {
  CREATE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
  CLEAR_DONE_TASK
} from "./actionType";
let nextTaskId = 0;
export const createTask = payload => ({
  type: CREATE_TASK,
  payload: Object.assign({}, payload, { taskId: ++nextTaskId })
});
export const editTask = payload => ({
  type: EDIT_TASK,
  payload
});
export const updateTask = payload => ({
  type: UPDATE_TASK,
  payload
});
export const clearDoneTask = payload => ({
  type: CLEAR_DONE_TASK,
  payload
});
