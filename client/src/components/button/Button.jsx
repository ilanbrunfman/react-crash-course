import './Button.scss';
import Icon from '@/components/icons/Icon';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    type = 'button',
    loading = false,
    disabled = false,
    onClick,
    icon = null,
    className = '',
}) => {

    const resolvedClassName =
        typeof className === 'function'
            ? className({})
            : className || '';

    const classes = `
        btn 
        btn-${variant} 
        btn-${size} 
        ${loading ? 'btn-loading' : ''} 
        ${resolvedClassName}
    `.trim();

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

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading && <span className="btn-spinner" />}

            {!loading && icon && icon.position !== 'right' && renderIcon()}

            {!loading && <span className="btn-label">{children}</span>}

            {!loading && icon && icon.position === 'right' && renderIcon()}
        </button>
    );
};

export default Button;