import { createBrowserRouter } from 'react-router-dom'
// import { requireAdmin } from '@/auth/requireAuth'
import { requireAuth, requireAdmin, requireUser } from '@/auth/guards'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import AboutDynamic from './pages/about/AboutDynamic'
import ContactPage from './pages/contact/ContactPage'
import Crud from './pages/crud/CRUD'
import ResumePage from './pages/resume/ResumePage'
import LoginPage from './pages/login/LoginPage'
import Signup from './pages/signup/Signup'
import ISAPage from './pages/isa/ISAPage'
import ISASection from './pages/isa/ISASection'
import ISADynamic from './pages/isa/ISADynamic'
import PasswordGenerator from './pages/passwordGenerator/PasswordGenerator'
import QRCode from './pages/qrcode/QRCode'
import NotFoundPage from './pages/notFound/NotFoundPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        loader: requireAuth,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: requireAdmin,
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
                path: 'password-generator',
                element: <PasswordGenerator />,
            },
            {
                path: 'qrcode',
                element: <QRCode />,
            },
            {
                path: 'isa',
                element: <ISAPage />,
                children: [
                    {
                        path: ":section",
                        element: <ISASection />,
                        children: [
                            {
                                path: ":page",
                                element: <ISADynamic />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'profile',
                element: <ResumePage />,
                loader: requireUser,
            },
            {
                path: 'crud',
                element: <Crud />,
            },
        ],
    },
    {
        path: 'contact',
        element: <ContactPage />,
    },
    {
        path: 'signup',
        element: <Signup />,
    },
    {
        path: 'login',
        element: <LoginPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
    
])

export default router