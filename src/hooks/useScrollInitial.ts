import { useEffect, useState } from "react";

type useScrollReturn = {
    isScrolled: boolean,
    setIsScrolled: (val: boolean) => void,
}

export function useScrollInitial(): useScrollReturn {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    
    useEffect( () => {
    const handleScroll = () => {
        const scrollPos = window.scrollY;
        setIsScrolled(scrollPos > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    // empty dependency array means it will run only once

    return {isScrolled, setIsScrolled};
}
