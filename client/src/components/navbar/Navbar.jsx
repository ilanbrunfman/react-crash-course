import { useNavigate, Link, NavLink } from 'react-router-dom'
import { useAuth } from '@/auth/AuthContext'
import { useState, useRef, useEffect } from 'react'
import './Navbar.scss'

const Navbar = () => {
    
    const { user, isAuthenticated, logout } = useAuth()
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    const isAdmin = user?.type === 'admin'

    const navLink =  ({ isActive }) => 
        isActive ? 'nav-link active' : 'nav-link'

    const initials = user 
        ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase() 
        : ''


    const handleLogout = () => {
        logout()                   // clear token + context state
        navigate('/login', { replace: true })  // redirect immediately
    }

    const toggleDropdown = () => {
        setOpen(prev => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to='/' className="nav-logo"><span>React</span>Job</Link>
                </div>

                <div className="d-flex align-items-center gap-1">
                    <div className="navbar-nav">
                        {isAdmin && <NavLink to='/' className={navLink}>Home</NavLink> }
                        { isAuthenticated && <NavLink to='/about' className={navLink}>About</NavLink> }
                        <NavLink to='/contact' className={navLink}>Contact</NavLink>
                        {/* <NavLink to={ token ? `/resume` : '/auto/login' } className={navLink}>Login</NavLink> */}
                        
                    </div>
                    {isAuthenticated && (
                        <div className="nav-user" ref={dropdownRef} >
                            <div className="nav-avatar" onClick={toggleDropdown} >
                                {initials}
                            </div>

                            {open && (
                                <div className="nav-dropdown">
                                    <NavLink to="/profile" className="dropdown-item" onClick={() => setOpen(false)} >
                                        Profile
                                    </NavLink>

                                    <button className="dropdown-item" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar