import IconHome from './IconHome'
import IconMinus from './IconMinus'
import IconPlus from './IconPlus'
import IconTrash from './IconTrash'
import IconUser from './IconUser'
import IconX from './IconX'

// Register all your icons here
const icons = {
    IconHome: IconHome,
    IconMinus: IconMinus,
    IconPlus: IconPlus,
    IconTrash: IconTrash,
    IconUser: IconUser,
    IconX: IconX,
};

const Icon = ({ name, size = 18, strokeWidth = 2, color, className = '', ...props }) => {
    const Component = icons[name];

    if (!Component) {
        console.warn(`Icon "${name}" does not exist!`);
        return null;
    }

    return <Component size={size} strokeWidth={strokeWidth} color={color} className={className} {...props} />;
};

export default Icon;