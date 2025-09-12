import { useNavigationStore, type AllRefsType, type Pages } from "@/store/useNavigationStore";
import { useEffect} from "react"


export function useSectionObserver( all_refs?: AllRefsType ) {
    const { setActiveSection, refs, setRefs } = useNavigationStore();


    
    useEffect(()=>{
        if(all_refs){
            console.log("is it running??");
            console.log("Ref for about: ", all_refs.homeRef.current?.id)
            setRefs({
                homeRef: all_refs.homeRef,
                projRef: all_refs.projRef,
                aboutRef: all_refs.aboutRef,
                contactRef: all_refs.contactRef,
            })
        }

    }, [])

    useEffect(() => {
        const isMobile = window.innerWidth < 755;
        
        // Create separate observers for different sections
        const createObserver = (threshold: number) => {
            return new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // console.log("Active target: ", entry.target.id, "Intersection ratio:", entry.intersectionRatio)
                        setActiveSection(entry.target.id as Pages);
                    }
                })
            }, {
                root: null,
                rootMargin: "0px",
                threshold: threshold,
            });
        };

        // There was some glitch that hook wasn't able to detect about-me page, so solved it by decreasing threshold
        const generalObserver = createObserver(isMobile ? 0.5 : 0.6);
        const aboutObserver = createObserver(isMobile ? 0.2 : 0.4); // Lower threshold for About section


        [refs.homeRef, refs.projRef, refs.contactRef].forEach((ref) => {
            if (ref.current) generalObserver.observe(ref.current);
        });

        
        if (refs.aboutRef.current) {
            aboutObserver.observe(refs.aboutRef.current);
        }

        return () => {
            generalObserver.disconnect();
            aboutObserver.disconnect();
        };
    }, [setActiveSection, refs]);

    return { refs };
}
