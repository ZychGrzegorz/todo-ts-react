interface Task {
  title: string;
  description: string;
  status: boolean;
}

interface TasksState {
  tasks: Array<Task>;
}

const initialState = {
  tasks: [],
};

type Actions = { type: "ADD_TASK"; payload: Task };

const tasksReducer = (state: TasksState = initialState, action: Actions) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("ADD_TASK", action.payload);
      return { ...state, tasks: [...state.tasks, action.payload] };

    default:
      return state;
  }
};

export default projectReducer;
