import { usePageMeta } from "@/hooks/usePageMeta";
import RouterLink from '@/components/navigation/RouterLink/RouterLink';
import Image from "@/components/image/Image"
import Icon from '@/components/icons/Icon';

import './HomePage.scss'

const HomePage = () => {

    usePageMeta({
        title: "Good Day",
        icon: "/icons/vite.svg",
    })

    const items = [
        {
            id: 'isa',
            path: '/isa',
            title: 'Closed Loop Marketing (CLM)',
            sub: 'Veeva CRM',
            thumbnail:{
                file: "eit.jpeg",
                alt: "User photo",
                // ratio: "4/3",
            },
        },
        {
            id: 'crud',
            path: '/crud',
            title: 'CRUD',
            sub: 'REST APIs',
            thumbnail:{
                file: "ib.svg",
                alt: "User photo",
                // ratio: "4/3",
            },
        },
        {
            id: 'crud',
            path: '/crud',
            title: 'Password Generator',
            sub: 'REST APIs',
            thumbnail:{
                file: "ib.svg",
                alt: "User photo",
                // ratio: "4/3",
            },
        },
        {
            id: 'crud',
            path: '/crud',
            title: 'QRcode Generator',
            sub: 'REST APIs',
            thumbnail:{
                file: "ib.svg",
                alt: "User photo",
                // ratio: "4/3",
            },
        },
        {
            id: 'jatenzo',
            path: 'https://renewlifekc.com/',
            title: 'Jatenzo.com',
            sub: '.Net Framework',
            thumbnail:{
                file: "renewlife.png",
                alt: "User photo",
                // ratio: "4/3",
            },
        },
        {
            id: 'jatenzo',
            path: 'https://jatenzo.com/',
            title: 'Jatenzo.com',
            sub: '.Net Framework',
            thumbnail:{
                file: "jatenzo.png",
                alt: "User photo",
                // ratio: "4/3",
            },
        },
    ]


    return (
        <div className="home">

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-2 mb-4">
                            <div className="container-main d-flex align-items-center justify-between">
                                <h1 className='mb-2'>Projects</h1>
                                 <h2 className="">Search bar</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-4">
                            <div className="container-main">
                                <h2 className="">Looped banner swiper of 3 random projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-2">
                            <div className="container-main">
                                <h2 className="">Filter</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex mx-auto mb-6">
                            <div className="container-main ">
                                <div className="items d-grid grid-1 grid-md-2 gap-1 mb-2">
                                    { items.map((item, index) =>  (
                                        <RouterLink 
                                            key={index}
                                            to={item.path} 
                                            className="item"
                                        >
                                            <div className="item-header">
                                                <Image 
                                                    file={item.thumbnail.file} 
                                                    alt={item.thumbnail.alt} 
                                                    ratio={item.thumbnail.ratio} 
                                                    className={item.thumbnail.className} 
                                                />
                                            </div>
                                            <div className="item-body">
                                                <h3 className="title">{item.title}</h3>
                                                <h4 className="sub">{item.sub}</h4>
                                            </div>
                                            <div className="item-footer">
                                                <Icon
                                                    name={'IconCaretRight'}
                                                    size="16"
                                                    // color="red"
                                                    className="icon"
                                                />
                                            </div>
                                        </RouterLink>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default HomePage