import RouterLink from '@/components/navigation/RouterLink/RouterLink';
import UserDropdownMenu from '@/components/navigation/UserDropdownMenu';

const Header = ({ 
    sidebarOpen,
    user,
    handleLogout 
}) => {
    return (
        <header className={`nav-header ${sidebarOpen ? "open" : "closed"}`}>
            <div className="logo">
                <RouterLink to='/'><span>React</span>Job</RouterLink>
            </div>

            <UserDropdownMenu 
                user={user}
                handleLogout={handleLogout}
            />
        </header>
    )
}

export default Header;