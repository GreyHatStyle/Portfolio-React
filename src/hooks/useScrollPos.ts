import { useEffect, useState } from "react";

type useScrollReturn = {
    scrollPos: number,
    setScrollPos: (val: number) => void,
}

export function useScrollPos(): useScrollReturn {
    const [scrollPos, setScrollPos] = useState<number>(0);
    
    useEffect( () => {
    const handleScroll = () => {
        const scrollPos = window.scrollY;
        setScrollPos(scrollPos);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    // empty dependency array means it will run only once

    return {scrollPos, setScrollPos};
}
