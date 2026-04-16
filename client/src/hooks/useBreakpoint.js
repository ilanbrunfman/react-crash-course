/* Detect screen size (hook) */
// hooks/useBreakpoint.js 
import { useEffect, useState } from "react"

export const useBreakpoint = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    console.log('test')
    return { isMobile }
}


// const { isMobile } = useBreakpoint()