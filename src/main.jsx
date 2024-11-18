import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Dashboard from './Component/Dashboard/Dashboard';
import ViewDetails from './Component/ViewDetails/ViewDetails';
import About from './Component/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/gadgets/:product_id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('/gadgets.json')
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },

      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
