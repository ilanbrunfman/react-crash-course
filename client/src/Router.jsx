import { createBrowserRouter } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import AboutDynamic from './pages/about/AboutDynamic'
import ContactPage from './pages/contact/ContactPage'
import ResumePage from './pages/resume/ResumePage'
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
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router