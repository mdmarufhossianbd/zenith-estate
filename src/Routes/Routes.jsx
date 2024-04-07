import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <div>page not found</div>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    },
  ]);


export default router