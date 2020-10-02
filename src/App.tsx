import React from "react";
import { TasksList } from "./components/TasksList";
import { NewTask } from "./components/NewTask";

const App: React.FC = () => {
  return (
    <>
      <p>to do app</p>
      <TasksList />
      <NewTask />
    </>
  );
};

export default App;
