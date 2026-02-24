import { Link, NavLink } from "react-router-dom"
import './Navbar.scss'

const Navbar = () => {
    
    const navLink =  ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'
    const token = localStorage.getItem('token')

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
                        <NavLink to={ token ? `/resume` : '/auto/login' } className={navLink}>Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar