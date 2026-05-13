import IconArrowLeft from './IconArrowLeft'
import IconBrowsers from './IconBrowsers'
import IconCards from './IconCards'
import IconCaretRight from './IconCaretRight'
import IconGithub from './IconGithub'
import IconHome from './IconHome'
import IconLayout from './IconLayout'
import IconLinkedin from './IconLinkedin'
import IconList from './IconList'
import IconListBullets from './IconListBullets'
import IconMinus from './IconMinus'
import IconMagnifyingGlass from './IconMagnifyingGlass'
import IconPlus from './IconPlus'
import IconSignIn from './IconSignIn'
import IconSignOut from './IconSignOut'
import IconTrash from './IconTrash'
import IconUser from './IconUser'
import IconStack from './IconStack'
import IconTable from './IconTable'
import IconTabs from './IconTabs'
import IconX from './IconX'

// Register all your icons here
const icons = {
    IconArrowLeft: IconArrowLeft,
    IconBrowsers: IconBrowsers,
    IconCards: IconCards,
    IconCaretRight: IconCaretRight,
    IconGithub: IconGithub,
    IconHome: IconHome,
    IconLayout: IconLayout,
    IconLinkedin: IconLinkedin,
    IconList: IconList,
    IconListBullets: IconListBullets,
    IconMinus: IconMinus,
    IconMagnifyingGlass: IconMagnifyingGlass,
    IconPlus: IconPlus,
    IconSignIn: IconSignIn,
    IconSignOut: IconSignOut,
    IconTrash: IconTrash,
    IconUser: IconUser,
    IconStack: IconStack,
    IconTable: IconTable,
    IconTabs: IconTabs,
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