import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Registration from '../Pages/Authentication/Registration';
import JobDetails from "../Pages/JobDetails";
import AddJob from "../Pages/AddJob";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />,

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/add-job',
                element : <AddJob/>
            }
        ]
    }
])

export default router