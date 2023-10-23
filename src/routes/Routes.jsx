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
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`)
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
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            }
        ]
    },
]);

export default router;