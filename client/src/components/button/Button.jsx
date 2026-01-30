import './Button.scss';

import Icon from '@/components/icons/Icon';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',            // sm | md | lg
    fullWidth = false,      // form button
    type = 'button',        // button | submit
    loading = false,
    disabled = false,
    onClick,
    icon = null,            // 'trash' | 'plus' | 'user'
    className = '',
}) => {

    const renderIcon = () => {
        if (!icon || !icon.name) return null;
        return (
            <Icon
                name={icon.name}
                size={icon.size || 18}
                color={icon.color || 'currentColor'}
                className={`btn-icon ${icon.position || 'left'}`}
            />
        );
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn--full' : ''} ${className}`}
        >
            {loading && <span className="btn-spinner" />}

            {!loading && icon && icon.position !== 'right' && renderIcon()}

            {!loading && <span className="btn-label">{children}</span>}

            {!loading && icon && icon.position === 'right' && renderIcon()}
        </button>
    );
};

export default Button;
