import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/auth/AuthContext'
import Header from "./Header";
import Aside from "./Aside";

import './Navigation.scss'

const Navigation = ({ sidebarOpen, toggleSidebar }) => {

    const { 
        user, 
        logout, 
        isAuthenticated, 
        isCustomer,
        isAdmin,
        isGuest,
    } = useAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        logout()                   // clear token + context state
        navigate('/login', { replace: true })  // redirect immediately
    }

    return (
        <nav className="nav">
            <Aside 
                isAdmin={isAdmin} 
                isAuthenticated={isAuthenticated}
                sidebarOpen={sidebarOpen} 
                toggleSidebar={toggleSidebar} 
            />
            <Header 
                sidebarOpen={sidebarOpen} 
                user={user} 
                handleLogout={handleLogout}
            />
        </nav>
    )
}

export default Navigation;