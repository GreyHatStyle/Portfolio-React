import { useNavigationStore, type Pages } from "@/store/useNavigationStore";
import {useRef, useEffect} from "react"


export function useSectionObserver() {
    const { setActiveSection, refs, setRefs } = useNavigationStore();

    const homeRef = useRef<HTMLElement>(null);
    const projRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);


    useEffect(()=>{
    console.log("is it running??");
    setRefs({
        homeRef: homeRef,
        projRef: projRef,
        aboutRef: aboutRef,
        contactRef: contactRef,
      })
    }, [])

    useEffect(() => {
        const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
        }
        
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Pages);
            }
        })
        }, options)

        const refsList = [refs.homeRef, refs.projRef, refs.aboutRef, refs.contactRef];
        
        refsList.forEach((ref) => ref.current && observer.observe(ref.current));

        return () => observer.disconnect();
    }, [setActiveSection]);

    return { refs };
}
