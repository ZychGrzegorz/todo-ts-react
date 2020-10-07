import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions/actions";

const defaultTask: Task = {
  title: "",
  description: "",
  status: false,
};

export const NewTask = () => {
  const [task, setTask] = useState(defaultTask);

  //<P extends keyof Task> znaczy to ze P przyjmuje klucze Task
  const onFormChange = <P extends keyof Task>(prop: P, value: Task[P]) => {
    setTask({ ...task, [prop]: value });
  };

  const dispatch = useDispatch();

  const onAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.title && task.description) {
      dispatch(addTask(task));
      setTask({ ...defaultTask });
    }
  };

  return (
    <>
      <form className="form" action="" onSubmit={(e) => onAddTask(e)}>
        <div className="lineInForm">
          <label htmlFor="addTitle" className="formLblTitle formLbl">
            Title:{" "}
          </label>
          <input
            value={task.title}
            className="formInput"
            type="text"
            name=""
            id="addTitle"
            onChange={(e) => onFormChange("title", e.target.value)}
          />
        </div>
        <div className="lineInForm">
          <label
            htmlFor="addDescription"
            className="formLblDescription formLbl"
          >
            Description:{" "}
          </label>
          <input
            className="formInput"
            type="text"
            name=""
            id="addTask"
            value={task.description}
            onChange={(e) => onFormChange("description", e.target.value)}
          />
        </div>

        <div className="lineInForm">
          <input type="submit" value="New Task" className="btnSubmit btn" />
        </div>
      </form>
    </>
  );
};
