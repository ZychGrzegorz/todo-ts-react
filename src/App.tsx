import React from "react";
import { TasksList } from "./components/TasksList";
import { NewTask } from "./components/NewTask";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="appContent">
      <h1 className="mainTitle">Todo List</h1>
      <NewTask />
      <TasksList />
    </div>
  );
};

export default App;
