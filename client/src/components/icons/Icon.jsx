import IconUser from './IconUser'
import IconPlus from './IconPlus'
import IconX from './IconX'
import IconHome from './IconHome'
import IconTrash from './IconTrash'

// Register all your icons here
const icons = {
    IconUser: IconUser,
    IconPlus: IconPlus,
    IconX: IconX,
    IconHome: IconHome,
    IconTrash: IconTrash,
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