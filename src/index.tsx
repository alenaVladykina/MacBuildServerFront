import {createRoot} from 'react-dom/client';
import {App} from "./App"
import React from 'react';
import {RouterProvider, createHashRouter} from 'react-router-dom'
import TaskList from "./components/TaskList";
import Profile from "./components/Profile";
import Task from "./components/Task";
import {rootStore, StoreContext} from "./store";


const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <TaskList/>,
      },
      {
        path: "/task/:id",
        element: <Task/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      }
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <StoreContext.Provider value={rootStore}>
    <RouterProvider router={router}/>
  </StoreContext.Provider>
);