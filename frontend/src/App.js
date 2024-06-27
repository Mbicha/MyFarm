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
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateFarm from "./pages/CreateFarm";
import Dashboard from "./pages/Dashboard";
import SubscriptionPlan from "./pages/SubscriptionPlan";

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
      },
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path:"/create-farm",
        element: <CreateFarm/>
      },
      {
        path:"/dashboard",
        element: <Dashboard/>
      },
      {
        path:"/subscription-plan",
        element: <SubscriptionPlan/>
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
