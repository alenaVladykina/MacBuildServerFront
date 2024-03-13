import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {RouterProvider} from 'react-router-dom';
import {store} from "./app/store";
import {router} from "./components/routes/routes";
import {Provider} from "react-redux";
import {PayloadMessage} from "./components/PayloadMessage";
import {GlobalError} from "./components/GlobalError";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <PayloadMessage/>
    <GlobalError/>
  </Provider>
);

export default class link {
}