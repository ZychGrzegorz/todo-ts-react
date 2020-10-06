import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../../store/actions/actions";

export const Task: React.FC<{ task: Task }> = ({ task }) => {
  const { description, title, status } = task;
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
      <label className={status ? "finished taskLbl" : "taskLbl"}>
        <span className="taskTitle">{title?.toString()}</span> <br />
        <span className="taskDescription"> {description?.toString()}</span>
      </label>
      <div className="inputContainer">
        <input
          className="inputCheckbox"
          type="checkbox"
          name=""
          id=""
          checked={status}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="inputButton btn"
          type="button"
          value="delete"
          onClick={(e) => handleDelete(e)}
        />
      </div>
    </>
  );
};
// );
