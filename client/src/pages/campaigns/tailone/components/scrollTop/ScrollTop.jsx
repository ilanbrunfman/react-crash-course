import { useEffect, useState } from 'react'
import Button from '@/components/Button/Button'
// import Icon from '@/components/Icons/Icon'
import './ScrollTop.scss'

const ScrollTop = () => {
    const [visible, setVisible] = useState(false)
    const [footerVisible, setFooterVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400)

            const footer = document.querySelector('footer')

            if (footer) {
                const footerTop =
                    footer.getBoundingClientRect().top

                const windowHeight = window.innerHeight

                setFooterVisible(footerTop < windowHeight)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <Button
            className={`
                scroll-top-btn
                ${visible ? 'visible' : ''}
                ${footerVisible ? 'footer-visible' : ''}
            `}
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            icon={{ name: 'IconCaretUp',  }}
        />
    )
}

export default ScrollTop