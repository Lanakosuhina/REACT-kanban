import { useContext } from "react";
import { TaskContext } from "../contexts/TasksContext";

export default function useTasks() {
  return useContext(TaskContext) //возвращает то, что мы передали через провайдер
}