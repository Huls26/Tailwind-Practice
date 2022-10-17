import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import PageLayout from "./pages/PageLayout";

const router = createBrowserRouter([
    {
        path:"/",
        element: <PageLayout />,
    },
])

export default function Routes() {
    return (
        <RouterProvider router={ router } />
    )
}