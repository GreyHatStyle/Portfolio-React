import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import type { sideBarStateType } from ".";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { useNavigationStore } from "@/store/useNavigationStore";



type SideBarProps = {
    sideBarState: sideBarStateType,
    setSideBarState: (val: sideBarStateType) => void 
}

function SideBar({
    sideBarState,
    setSideBarState,
}: SideBarProps) {

  const {refs} = useSectionObserver();
  const { scrollToSection } = useNavigationStore(); 
    
  return (
    <div id="side-bar"

    className={`fixed bg-slate-300/80
    top-0 right-0
    h-[100dvh] flex flex-col gap-2
    transition-transform duration-300 ease-in-out

    ${sideBarState == "open" ? 'translate-x-0' : 'translate-x-full'}
    
    sm:hidden
    `}
    >

      <button id="side-menu-closer"
      className="px-2 py-2  hover:cursor-pointer"
      onClick={()=>setSideBarState("close")}
      >
        <MdKeyboardArrowRight
        size={25}
        />
      </button>
      
      <Button
      className="px-11"
      variant={"ghost"}
      onClick={() => scrollToSection(refs.homeRef)}
      >
        Home
      </Button>

      <Button
      className="px-11"
      variant={"ghost"}
      onClick={()=> scrollToSection(refs.projRef)}
      >
        Projects
      </Button>

      <Button
      variant={"ghost"}
      onClick={()=> scrollToSection(refs.aboutRef)}
      >
        About Me
      </Button>

      <Button
      variant={"ghost"}
      onClick={()=> scrollToSection(refs.contactRef)}
      >
        Contact Me
      </Button>

    </div>
  )
}

export default SideBar