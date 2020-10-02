import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Task } from "./Task";
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

  const onAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(task));
  };

  return (
    <>
      <form action="" onSubmit={(e) => onAddTask(e)}>
        <label htmlFor="addDescription">Description: </label>
        <input
          type="text"
          name=""
          id="addTask"
          onChange={(e) => onFormChange("description", e.target.value)}
        />
        <label htmlFor="addTitle">Title: </label>
        <input
          type="text"
          name=""
          id="addTitle"
          onChange={(e) => onFormChange("title", e.target.value)}
        />

        <input type="submit" value="Dodaj zadanie" />
      </form>
    </>
  );
};
