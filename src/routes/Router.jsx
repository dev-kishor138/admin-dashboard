import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import FrontendLayouts from "../main/FrontendLayouts";
import BackendLayouts from "../main/BackendLayouts";
import Dashboard from "../pages/backend/Dashboard/Dashboard";
import Homepage from "../pages/frontend/Homepage/Homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontendLayouts />,
        children: [
            {
                path: "/",
                element: <Homepage />
            }
        ]
    },
    {
        path: "/admin",
        element: <BackendLayouts />,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard />
            }
        ]
    },
    {
        path: "*",
        element: <Error />
    }
])