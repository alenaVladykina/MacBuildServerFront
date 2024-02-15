import {createRoot} from 'react-dom/client';
import React from 'react';
import {RouterProvider} from 'react-router-dom'
import {rootStore, StoreContext} from "./store";
import {router} from "./components/routes/routes";


const root = createRoot(document.getElementById('root'));
root.render(
  <StoreContext.Provider value={rootStore}>
    <RouterProvider router={router}/>
  </StoreContext.Provider>
);