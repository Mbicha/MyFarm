import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import React from 'react';
import Index from "./Index";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

const Layout = () => {
  return(
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
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
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      },
      {
        path: "/services",
        element: <Services/>
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
