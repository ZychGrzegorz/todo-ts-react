type Task = {
  title?: string;
  description?: string;
  status: boolean;
};

type TasksState = {
  tasks: Task[];
};

type AddTask = { type: "ADD_TASK"; payload: Task };
type ToggleTask = { type: "TOGGLE_TASK"; payload: Task };
type DeleteTask={type: 'DELETE_TASK'; payload: Task}
type Actions = | AddTask | ToggleTask | DeleteTask
