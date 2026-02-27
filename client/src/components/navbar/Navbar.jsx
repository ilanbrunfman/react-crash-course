import { useNavigate, Link, NavLink } from 'react-router-dom'
import { useAuth } from '@/auth/AuthContext'
import { useState, useRef, useEffect } from 'react'
import Button from '@/components/button/Button';
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
    const fullName = user 
        ? `${user.firstName} ${user.lastName}`
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
                    </div>
                    {isAuthenticated && (
                        <div className="nav-user" ref={dropdownRef} >
                            <div className="nav-avatar" onClick={toggleDropdown} >
                                {initials}
                            </div>

                            {open && (
                                <div className="nav-dropdown">
                                    <div className="dropdown-section">
                                        <div className="dropdown-row">
                                            <div className="nav-avatar">{initials}</div>
                                            <div className="">
                                                <h4 className='item-title'>{fullName}</h4>
                                                <NavLink to="/profile" className="item-link" onClick={() => setOpen(false)}>View Profile</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-section">
                                        <div className="dropdown-row">
                                            {/* <button className="item-button" onClick={handleLogout}>
                                                Logout
                                            </button> */}
                                            <Button
                                                variant="empty"
                                                icon={{ name: 'IconSignOut', position: 'left',  size: 24, }}
                                                className="item-button"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </Button>
                                        </div>
                                    </div>

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