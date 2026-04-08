import { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom'
import { usePageMeta } from "@/hooks/usePageMeta";
import SearchInput from '@/pages/home/SearchInput';
import Item from '@/pages/home/Item'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './HomePage.scss'

const ITEMS = [
    {
        id: 'isa',
        path: '/isa',
        title: 'Closed Loop Marketing (CLM)',
        sub: 'Veeva CRM',
        category: ['CRM', 'frontend'],
        thumbnail:{ file: "eit.jpeg", alt: "User photo", },
    },
    {
        id: 'crud-api',
        path: '/crud',
        title: 'CRUD',
        sub: 'REST APIs',
        category: ['backend'],
        thumbnail:{ file: "ib.svg", alt: "User photo", },
    },
    {
        id: 'psw-gen',
        path: '/password-generator',
        title: 'Password Generator',
        sub: 'REST APIs',
        category: ['backend', 'frontend', 'Websites'],
        thumbnail:{ file: "ib.svg", alt: "User photo", },
    },
    {
        id: 'qrcode-gen',
        path: 'qrcode',
        title: 'QRcode Generator',
        sub: 'REST APIs',
        category: ['backend', 'Frontend'],
        thumbnail:{ file: "ib.svg", alt: "User photo", },
    },
    {
        id: 'renewlifekc',
        path: 'https://renewlifekc.com/',
        title: 'RenewlifeKC.com',
        sub: 'WordPress',
        category: ['WordPress', 'frontend'],
        thumbnail:{ file: "renewlife.png", alt: "User photo", },
    },
    {
        id: 'jatenzo',
        path: 'https://jatenzo.com/',
        title: 'Jatenzo.com',
        sub: '.Net Framework',
        category: ['frontend'],
        thumbnail:{ file: "jatenzo.png", alt: "User photo", },
    },
]

const HomePage = () => {

    usePageMeta({
        title: "Good Day",
        icon: "/icons/vite.svg",
    })

    const [activeCategory, setActiveCategory] = useState('all');
    const [search, setSearch] = useState('');
    

    // Filtered Items
    const filteredItems = useMemo(() => {
        
        return ITEMS.filter(item => {
            const matchesCategory =
                activeCategory === 'all' ||
                item.category?.map(c => c.toLowerCase()).includes(activeCategory);

            const matchesSearch =
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.sub.toLowerCase().includes(search.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    // Categories
    const categories = useMemo(() => {
        const map = new Map();

        ITEMS.forEach(item => {
            item.category?.forEach(cat => {
                const value = cat.toLowerCase();

                // preserve first "nice" version you encounter
                if (!map.has(value)) {
                    map.set(value, cat);
                }
            });
        });

        return [
            { value: 'all', label: 'All' },
            ...Array.from(map.entries())
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([value, label]) => ({ value, label }))
        ];
    }, []);


    //
    const shuffle = (arr) => {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    };

    const bannerItems = useMemo(() => {
        return shuffle(ITEMS).slice(0, 3);
    }, []);

    return (
        <div className="home">

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-2 mb-2">
                            <div className="container-main d-flex align-items-center justify-between">
                                <h1 className='mb-2'>Projects</h1>
                                <SearchInput
                                    value={search}
                                    onChange={setSearch}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-4">
                            <div className="container-main">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    spaceBetween={16}
                                    // slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 7500,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    pagination={{ clickable: true }}
                                    speed={1000}
                                    observer={true}
                                    observeParents={true}
                                >
                                    {bannerItems.map((item, index) => (
                                        <SwiperSlide key={index}  className=''>
                                            <div className="">
                                                <div className="banner-header">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.sub}</p>
                                                </div>
                                                <div className="banner-body"></div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-2">
                            <div className="container-main">
                                <div className="filters d-flex mb-2">
                                    {categories.map(cat => (
                                        <button
                                            key={cat.value}
                                            className={`filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
                                            onClick={() => setActiveCategory(cat.value)}
                                        >
                                            {cat.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex mx-auto mb-6">
                            <div className="container-main ">
                                {filteredItems.length > 0 ? (
                                    <div className="items d-grid grid-1 grid-md-2 gap-1 mb-2">
                                        { filteredItems.map(item =>  (
                                            <Item key={item.id} item={item} />
                                        ))}
                                    </div> 
                                ) : ( 
                                    <div className="no-results">
                                        <p>No results found</p>
                                    </div>) 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Outlet />

        </div>
    )
}
export default HomePage