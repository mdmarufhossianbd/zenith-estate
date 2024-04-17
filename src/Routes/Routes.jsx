import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import House from "../Pages/House/House";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SellOrRent from "../Pages/SellOrRent/SellOrRent";
import UpdaeUserProfile from "../Pages/UpdaeUserProfile/UpdaeUserProfile";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Data/Data.json')
      },
      {
        path: '/sellorrent',
        element: <PrivateRoutes><SellOrRent></SellOrRent></PrivateRoutes>,
        loader: () => fetch('/Data/Data.json')
      },
      {
        path: '/house/:id',
        element: <PrivateRoutes><House></House></PrivateRoutes>,
        loader: () => fetch('/Data/Data.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateuserprofile',
        element: <PrivateRoutes><UpdaeUserProfile></UpdaeUserProfile></PrivateRoutes>
      }
    ]
  },
]);


export default router