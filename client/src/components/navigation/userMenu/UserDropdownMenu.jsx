import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import RouterLink from '@/components/navigation/RouterLink/RouterLink';
import Button from '@/components/button/Button';

const UserDropdownMenu = ({
    user, 
    handleLogout
}) => {

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const initials = user
        ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
        : '';
    const fullName = user ? `${user.firstName} ${user.lastName}` : '';

    const toggleDropdown = () => setOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="user" ref={dropdownRef}>
            <div className="user-avatar" onClick={toggleDropdown}>{initials}</div>
            <AnimatePresence>
                {open && (
                    <motion.div 
                        className="user-dropdown"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98,  }}
                        transition={{ duration: 0.15 }}
                    >
                        <div className="dropdown-section">
                            <div className="dropdown-row">
                                <div className="item-avatar">{initials}</div>
                                <div className="">
                                    <h4 className={`item-title ${user.type !== 'guest' ? 'mb-0' : ''}`}>{fullName}</h4>
                                </div>
                            </div>
                        </div>
                        { user.type !== 'guest' && <div className="dropdown-section">
                            <div className="dropdown-row">
                                <RouterLink 
                                    to='/profile'
                                    className='item-button'
                                    icon={{ name: 'IconUser', position: 'left',  size: 16, }}
                                    onClick={() => setOpen(false)}
                                >Information</RouterLink>
                            </div>
                        </div> }
                        <div className="dropdown-section">
                            <div className="dropdown-row">
                                <Button
                                    variant="empty"
                                    icon={{ name: 'IconSignOut', position: 'left',  size: 16, }}
                                    className="item-button"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default UserDropdownMenu;