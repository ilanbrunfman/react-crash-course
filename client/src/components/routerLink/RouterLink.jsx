import { NavLink } from 'react-router-dom'
import Icon from '@/components/icons/Icon';

import './RouterLink.scss'

const RouterLink = ({ 
    className,
    to, 
    href, 
    children, 
    icon = null,  
    ...props
}) => {
    const isExternal = href || (to && to.startsWith("http"));

    const renderIcon = () => {
        if (!icon || !icon.name) return null;
        return (
            <Icon
                name={icon.name}
                size={icon.size || 18}
                color={icon.color || 'currentColor'}
                className={`icon ${icon.position || 'left'}`}
            />
        );
    };

    if (isExternal) {
        const userClass =
            typeof className === 'function' ? className({}) : className || '';

        return (
            <a  
                className={`external-link ${userClass}`.trim()}
                href={href || to} 
                target="_blank" 
                rel="noopener noreferrer" 
                {...props}
            >
                {icon && icon.position !== 'right' && renderIcon()}
                {children}
                {icon && icon.position == 'right' && renderIcon()}
            </a>
        );
    }
    
    return(
        <NavLink 
            className={(navData) => {
                const userClass =
                typeof className === 'function' ? className(navData) : className || '';
                return `router-link ${userClass}`.trim();
            }}
            to={to} 
            {...props}
        >
            {icon && icon.position !== 'right' && renderIcon()}
            {children}
            {icon && icon.position == 'right' && renderIcon()}
        </NavLink>
    )
}

export default RouterLink;