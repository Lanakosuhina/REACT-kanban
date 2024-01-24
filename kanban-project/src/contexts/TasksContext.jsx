import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/approutes";

export const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(null);
  const navigate = useNavigate();

  function createTask( data ) {
    setTasks(data.tasks);
    navigate(AppRoutes.MAIN);
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
}
