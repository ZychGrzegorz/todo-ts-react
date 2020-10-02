import React from "react";
import { useSelector } from "react-redux";

import { Task } from "./Task";

export const TasksList: React.FC = () => {
  const tasks = useSelector<TasksState, TasksState["tasks"]>((state) => {
    console.log(state);
    return state.tasks;
  });

  return (
    <>
      <ul>
        {tasks.length &&
          tasks.map((task, id) => {
            return <li key={id}>{<Task task={task} />}</li>;
          })}
      </ul>
    </>
  );
};
