import { useAuth } from '@/auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import RouterLink from '@/components/navigation/RouterLink/RouterLink';
import UserDropdownMenu from '@/components/navigation/userMenu/UserDropdownMenu';

import './Header.scss'

const Header = ({ 
    sidebarOpen,
    toggleSidebar,
}) => {

    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()                   // clear token + context state
        navigate('/login', { replace: true })  // redirect immediately
    }

    return (
        <header className={`nav-header ${sidebarOpen ? "open" : "closed"}`}>
            <div className="d-flex align-items-center gap-1">
                <button className="hamburger" onClick={() => toggleSidebar()}>☰</button>
                {/* <RouterLink 
                    to='/'
                    className='nav-header-logo'
                    onClick={toggleSidebar(prev => !prev)}
                >React <span>Job</span></RouterLink> */}
            </div>

            <UserDropdownMenu 
                user={user}
                handleLogout={handleLogout}
            />
        </header>
    )
}

export default Header;