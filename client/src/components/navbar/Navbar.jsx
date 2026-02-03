import { Link, NavLink } from "react-router-dom"
import './Navbar.scss'

const Navbar = () => {
    
    const navLink =  ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to='/' className="nav-logo"><span>React</span>Job</Link>
                </div>
                <div className="navbar-nav">
                    <NavLink to='/' className={navLink}>Home</NavLink>
                    <NavLink to='/about' className={navLink}>About</NavLink>
                    <NavLink to='/contact' className={navLink}>Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar