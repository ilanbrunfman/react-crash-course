import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import NotFoundPage from './pages/notFound/NotFoundPage'


const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={ <MainLayout />} >
                    <Route index element={ <HomePage /> } />
                    <Route path='/about' element={ <AboutPage /> } />
                    <Route path='/contact' element={ <ContactPage /> } />
                </Route>
    
                <Route path='*' element={ <NotFoundPage /> } />
            </>
        )
    )
    return ( <RouterProvider router={router} /> )
} 
export default App