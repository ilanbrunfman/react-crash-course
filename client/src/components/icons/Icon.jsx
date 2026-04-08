import IconArrowLeft from './IconArrowLeft'
import IconCaretRight from './IconCaretRight'
import IconHome from './IconHome'
import IconMinus from './IconMinus'
import IconMagnifyingGlass from './IconMagnifyingGlass'
import IconPlus from './IconPlus'
import IconSignIn from './IconSignIn'
import IconSignOut from './IconSignOut'
import IconTrash from './IconTrash'
import IconUser from './IconUser'
import IconX from './IconX'

// Register all your icons here
const icons = {
    IconArrowLeft: IconArrowLeft,
    IconCaretRight: IconCaretRight,
    IconHome: IconHome,
    IconMinus: IconMinus,
    IconMagnifyingGlass: IconMagnifyingGlass,
    IconPlus: IconPlus,
    IconSignIn: IconSignIn,
    IconSignOut: IconSignOut,
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