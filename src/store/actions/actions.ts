export const addTask = (task: Task): Actions => {
  return { type: "ADD_TASK", payload: task };
};

export const toggleTask = (task: Task): Actions => {
  return { type: "TOGGLE_TASK", payload: task };
};

export const deleteTask = (task:Task):Actions=>{
  return {type: 'DELETE_TASK', payload: task}
}

