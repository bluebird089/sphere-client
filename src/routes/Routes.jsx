import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import LogIn from "../pages/auth/LogIn";
import Register from "../pages/auth/Register";


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
                path: "/add-product",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/my-cart",
                element: <MyCart></MyCart>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;