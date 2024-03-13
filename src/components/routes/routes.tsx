import {createBrowserRouter} from "react-router-dom";
import App from "../../app/App";
import WorkPage from "../workPage/WorkPage";
import Home from "../home/Home";
import WorkDetails from "../workDetails/WorkDetails";
import Blog from "../blog/Blog";
import SignUp from "../auth/signUp";
import {SignIn} from "../auth/signIn";


const publicRoutes = [
  {
    path: "/auth",
    element: <SignIn/>,
  },
  {
    path: "/registration",
    element: <SignUp/>,
  },
];

const privateRoutes = [
  {
    path: "/",
    element: <Home/>,

  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "works",
    element: <WorkPage/>,
  },
  {
    path: "works/:id",
    element: <WorkDetails/>,
  },
];


export const router = createBrowserRouter([
  ...publicRoutes,
  {
    path: "/",
    element: <App/>,
    children: privateRoutes
  }
]);