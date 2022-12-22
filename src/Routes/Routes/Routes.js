import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import NotFound from "../../Pages/NotFound/NotFound";
import About from "../../Pages/Shared/About/About";
import Contact from "../../Pages/Shared/Contact/Contact";
import ServiceDetails from "../../Pages/Shared/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <AllServices></AllServices>
      },
      {
        path: '/service/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`https://the-smart-tutor-server.vercel.app/service/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/myreviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path: '/add-service',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])