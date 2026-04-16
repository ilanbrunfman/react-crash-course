/* Detect screen size (hook) */
import { useEffect, useState } from "react"

export const useBreakpoint = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobileViewport = width < 768;
    const isDesktopViewport = width >= 1024;
    const isTabletViewport = width >= 768 && width < 1024;

    return { width, isMobileViewport, isTabletViewport, isDesktopViewport };
}

// import { useBreakpoint } from '@/hooks/useBreakpoint'
// const { isMobileViewport } = useBreakpoint()