import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

function PrivateRoute({ children }) {
  const { user } = useUser(); // получаем данные из контекта
  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
