import { useAuth } from '@/auth/AuthContext'
import { Link, NavLink } from "react-router-dom"
import './Navbar.scss'

const Navbar = () => {
    
    const { user, isAuthenticated, logout } = useAuth()
    const navLink =  ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'
    // const token = localStorage.getItem('token')
    const initials = user ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase() : ''
    const fullName = user ? `${user.firstName} ${user.lastName}` : ''

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to='/' className="nav-logo"><span>React</span>Job</Link>
                </div>
                <div className="">
                    <div className="navbar-nav">
                        <NavLink to='/' className={navLink}>Home</NavLink>
                        <NavLink to='/about' className={navLink}>About</NavLink>
                        <NavLink to='/contact' className={navLink}>Contact</NavLink>
                        {/* <NavLink to={ token ? `/resume` : '/auto/login' } className={navLink}>Login</NavLink> */}
                        {isAuthenticated ? (
                            <>
                                <NavLink to='/resume' className={navLink}>Resume</NavLink>

                                <div className="nav-user">
                                    <div className="nav-avatar">{initials}</div>
                                    <span className="nav-name">{fullName}</span>
                                    <button className="logout-btn" onClick={logout}>Logout</button>
                                </div>
                            </>
                        ) : (
                            <NavLink to='/login' className={navLink}>Login</NavLink>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar