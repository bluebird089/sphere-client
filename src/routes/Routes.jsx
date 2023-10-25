import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import LogIn from "../pages/auth/LogIn";
import Register from "../pages/auth/Register";
import Products from "../pages/Products/Products";
import Update from "../pages/Update/Update";
import Details from "../pages/Details/Details";
import PrivateRoute from "./PrivateRoute";

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
                path: "products/:brand",
                element: <Products></Products>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-bluebird089.vercel.app/products/${params.brand}`)
            },
            {
                path: "/add-product",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/my-cart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch("https://b8a10-brandshop-server-side-bluebird089.vercel.app/cart")
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-bluebird089.vercel.app/product/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-bluebird089.vercel.app/product/${params.id}`)
            }
        ]
    },
]);

export default router;