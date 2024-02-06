import {createRoot} from 'react-dom/client';
import {App} from "./App"
import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Form from "./pages/form/Form";
import ButtonPage from "./pages/buttonsPage/ButtonPage";
import Data from "./pages/data/Data";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Data/>
      },
      {
        path: "/buttons",
        element: <ButtonPage/>
      },
      {
        path: "/form",
        element: <Form/>
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);