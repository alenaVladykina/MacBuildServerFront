import {createHashRouter} from "react-router-dom";
import {App} from "../../App";
import TaskList from "../TaskList";
import Task from "../Task";
import AuthorizationForm from "../auth/AuthorizationForm";
import RegistrationForm from "../auth/RegistrationForm";
import Profile from "../Profile";
import React from "react";


const publicRoutes = [
  {
    path: "/auth",
    element: <AuthorizationForm/>
  },
  {
    path: "/register",
    element: <RegistrationForm/>,
  }
];

const privateRoutes = [
  {
    path: "/",
    element: <TaskList/>

  },
  {
    path: "/add",
    element: <Task/>
  },
  {
    path: "/task/:id",
    element: <Task/>
  },

  {
    path: "/profile",
    element: <Profile/>
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