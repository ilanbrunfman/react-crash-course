import { useParams } from 'react-router-dom';
import { aboutPages } from "./uiData"

const AboutDynamic = () => {
    const { slug } = useParams()

    const page = aboutPages.find(p => p.slug === slug)

    if (!page) return <p>Page not found.</p>

    const Component = page.component   // 🧠 THIS is the key

    return <Component />
};

export default AboutDynamic;