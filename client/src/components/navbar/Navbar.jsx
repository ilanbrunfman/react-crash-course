import { NavLink } from "react-router-dom"

const Navbar = () => {
    
    const linkClass =  ({ isActive }) => isActive ? 'active' : ''

    return (
        <nav>
            <h2>Navbar</h2>
            <div>
                <NavLink to='/' className={linkClass}>Home</NavLink>
                <NavLink to='/about' className={linkClass}>About</NavLink>
                <NavLink to='/contact' className={linkClass}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar