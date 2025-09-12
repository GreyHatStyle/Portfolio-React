import { create } from "zustand"

export type Pages = "Home" | "Projects" | "AboutMe" | "ContactMe"

export type AllRefsType = {
    homeRef: React.RefObject<HTMLElement | null>,
    projRef: React.RefObject<HTMLElement | null>,
    aboutRef: React.RefObject<HTMLElement | null>,
    contactRef: React.RefObject<HTMLElement | null>
};

type NavigationStoreType = {
  activeSection: Pages,
  refs: AllRefsType
  setRefs: (refs: AllRefsType) => void,
  setActiveSection: (val: Pages) => void,
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void
}


export const useNavigationStore = create<NavigationStoreType>((set) => ({
    activeSection: "Home",
    refs: {
        homeRef: { current: null },
        projRef: { current: null },
        aboutRef: { current: null },
        contactRef: { current: null }
    },
    setRefs: (inpRefs: AllRefsType) =>{
        set(() => ({
            refs: {
                homeRef: inpRefs.homeRef,
                projRef: inpRefs.projRef,
                aboutRef: inpRefs.aboutRef,
                contactRef: inpRefs.contactRef,
            }
        }))
    },
    setActiveSection: (val: Pages) => {
        set(() => ({ activeSection: val }));
    },
    scrollToSection: (ref: React.RefObject<HTMLElement | null>) =>{
        ref.current?.scrollIntoView({behavior: "smooth"});
    }
}));
