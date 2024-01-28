import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext.jsx";
import { TaskProvider } from "./contexts/TasksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </TaskProvider>
    </BrowserRouter>
  </React.StrictMode>
);
