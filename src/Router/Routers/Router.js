import Blog from "../../Blog/Blog";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Service from "../../Pages/Services/Service";
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";





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
                loader: ({params}) => fetch(`http://localhost:5000/allServices/${params.id}`)
            }

        ]
    }
])

export default router;