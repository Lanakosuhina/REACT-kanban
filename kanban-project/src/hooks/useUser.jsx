import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function useUser() {
  return useContext(UserContext) //возвращает то, что мы передали через провайдер
}