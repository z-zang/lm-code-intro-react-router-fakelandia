import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import MisdemeanoursPage from './pages/MisdemeanoursPage.tsx'
import ConfessPage from './pages/ConfessPage.tsx'
import HomePage from './pages/HomePage.tsx'

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <HomePage />,
            },
            {
                path: "misdemeanours",
                element: <MisdemeanoursPage />,
            },
            {
                path: "confess",
                element: <ConfessPage />,
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
