import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import React from 'react';
import Index from "./Index";
import NavBar from "./components/NavBar";

const Layout = () => {
  return(
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Index/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
