import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BabyCare from "../Pages/Home/CategoryCard/BabyCare";
import WomenCare from "../Pages/Home/CategoryCard/WomenCare";


import Capsule from "../Pages/Home/CategoryCard/Capsule";
import Injection from "../Pages/Home/CategoryCard/Injection";
import SyrupA from "../Pages/Home/CategoryCard/SyrupA";
import TabletA from "../Pages/Home/CategoryCard/TabletA";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/babyCare",
        element: <BabyCare></BabyCare>
      },
      
      {
        path: "/womenCare",
        element: <WomenCare></WomenCare>
      
      },
      
      {
        path: "/capsule",
        element: <Capsule></Capsule>
      
      },
      {
        path: "/injection",
        element: <Injection></Injection>
      },
      {
        path : "/SyrupA",
        element: <SyrupA></SyrupA>
      },
      {
        path: "/TabletA",
        element: <TabletA></TabletA>
      }
    ]
  },
]);