import Blog from "../../Blog/Blog";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Service from "../../Pages/Services/Service";
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";
import MyReview from "../../Pages/CheckOut/MyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";






const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path:'serviceDetails',
                element: <ServicesDetails></ServicesDetails>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '/service/:id',
                element: <Service></Service>,
                loader: ({params}) => fetch(`https://b6a11-service-review-server-side-mirazulislam1.vercel.app/allServices/${params.id}`)
            },
            {
                path: '/checkOut/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://b6a11-service-review-server-side-mirazulislam1.vercel.app/allServices/${params.id}`)
            },
            {
                path: 'myReview',
                element: <MyReview></MyReview>
            }

        ]
    }
])

export default router;