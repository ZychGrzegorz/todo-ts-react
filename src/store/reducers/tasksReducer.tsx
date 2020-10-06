const initialState = {
  tasks: [
    { title: "New project", description: "Create new project", status: false },
    { title: "Styling", description: "Style this app", status: false },
  ],
};

export const tasksReducer = (
  state: TasksState = initialState,
  action: Actions
) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("ADD_TASK", action.payload);
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "TOGGLE_TASK":
      let newState = { ...state };
      console.log("TOGGLE_TASK", action.payload);
      newState.tasks.map((el, id) => {
        if (action.payload === el) {
          newState.tasks[id].status = !el.status;
        }
        return newState;
      });
      return { ...state, tasks: [...newState.tasks] };
    case "DELETE_TASK":
      console.log("DELETE_TASK", action.payload);

      return {
        ...state,
        tasks: state.tasks.filter((el) => el !== action.payload),
      };

    default:
      return state;
  }
};
