import {createHashRouter} from "react-router-dom";
import {App} from "../../App";
import TaskList from "../TaskList";
import Task from "../Task";
import AuthorizationForm from "../auth/AuthorizationForm";
import RegistrationForm from "../auth/RegistrationForm";
import Profile from "../Profile";
import React from "react";
import {ProtectedRouter} from "./ProtectedRouter";


const publicRoutes = [
  {
    path: "/auth",
    element: <AuthorizationForm/>,
  },
  {
    path: "/register",
    element: <RegistrationForm/>,
  }
];

const privateRoutes = [
  {
    path: "/",
    element:
      <ProtectedRouter>
        <TaskList/>
      </ProtectedRouter>

  },
  {
    path: "/add",
    element:
      <ProtectedRouter>
        <Task/>
      </ProtectedRouter>
  },
  {
    path: "/task/:id",
    element:
      <ProtectedRouter>
        <Task/>
      </ProtectedRouter>
  },

  {
    path: "/profile",
    element:
      <ProtectedRouter>
        <Profile/>
      </ProtectedRouter>
  }
];


export const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: privateRoutes,
  },
  ...publicRoutes,
]);