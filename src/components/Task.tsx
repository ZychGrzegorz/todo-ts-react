import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../store/actions/actions";
export const Task: React.FC<{ task: Task }> = ({ task }) => {
  const { description, title, status } = task;
  console.log(description, status, title);

  const dispatch = useDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(toggleTask(task));
  };
  const handleDelete = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(deleteTask(task));
    console.log(e.target);
  };

  return (
    <>
      {description} {status.toString()} {title}
      <input
        type="checkbox"
        name=""
        id=""
        checked={status}
        onChange={(e) => handleChange(e)} //event na toggle status w reduxie
      />
      <input type="button" value="delete" onClick={(e) => handleDelete(e)} />
    </>
  );
};
// );
