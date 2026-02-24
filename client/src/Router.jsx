import { createBrowserRouter } from 'react-router-dom'
import { requireAuth } from '@/services/auth'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import AboutDynamic from './pages/about/AboutDynamic'
import ContactPage from './pages/contact/ContactPage'
import ResumePage from './pages/resume/ResumePage'
import LoginPage from './pages/login/LoginPage'
import Signup from './pages/signup/Signup'
import NotFoundPage from './pages/notFound/NotFoundPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
                children: [
                    {
                        path: ':slug',
                        element: <AboutDynamic />,
                    },
                ],
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            
            {
                path: 'resume',
                element: <ResumePage />,
                loader: requireAuth,
            },
        ],
    },
    {
        path: 'auto/signup',
        element: <Signup />,
    },
    {
        path: 'auto/login',
        element: <LoginPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
    
])

export default router