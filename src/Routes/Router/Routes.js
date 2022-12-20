import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../../layout/DashboardLayout/DashboardLayout';
import Main from '../../layout/Main';
import Appointment from '../../Page/Appintment/Appintment';
import AllUsers from '../../Page/Dashboard/AllUsers/AllUsers';
import Dashboard from '../../Page/Dashboard/Dashboard';
import MyAppointment from '../../Page/Dashboard/MyAppointment/MyAppointment';
import ErrorPage from '../../Page/ErrorPage/ErrorPage';
import Home from '../../Page/Home/Home.';
import Login from '../../Page/Login/Login';
import SignUp from '../../Page/SignUp/SignUp';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
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
                path: '/appointments',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoutes><MyAppointment></MyAppointment></PrivateRoutes>
            },
            {
                path: '/dashboard/allusers',
                element: <PrivateRoutes><AllUsers></AllUsers></PrivateRoutes>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;