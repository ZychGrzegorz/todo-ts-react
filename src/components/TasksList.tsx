import React from "react";
import { useSelector } from "react-redux";
import { Task } from "./Task";

export const TasksList: React.FC = () => {
  const tasks = useSelector<TasksState, TasksState["tasks"]>((state) => {
    return state.tasks;
  });

  return (
    <>
      <ul className="tasksList">
        {tasks.length &&
          tasks.map((task, id) => {
            return (
              <li key={id} className="task">
                {<Task task={task} />}
              </li>
            );
          })}
      </ul>
    </>
  );
};
