import './Banner.scss'  

const ITEMS = [
    'React',
    'Vue',
    'Next.js',
    'Tailwind',
    'Node.js',
    'TypeScript',
]

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-container">

                <div className="banner-track">

                    {/* FIRST SET */}
                    {ITEMS.map((item) => (
                        <div key={item} className="banner-item">
                            {item}
                        </div>
                    ))}

                    {/* DUPLICATE FOR LOOP */}
                    {ITEMS.map((item) => (
                        <div key={`${item}-dup`} className="banner-item">
                            {item}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Banner