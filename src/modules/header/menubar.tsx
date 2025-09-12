import { ThemeToggleButton } from "@/components/themes";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { cn } from "@/lib/utils"
import { useNavigationStore } from "@/store/useNavigationStore";

function MenuBar() {

  const buttonCN = "px-5 py-2 hover:cursor-pointer hover:bg-slate-700 rounded-4xl";

  // const {pageName: activeSection, pageScrollData} = usePagePosition();
  const {activeSection, scrollToSection} = useNavigationStore();
  const {refs} = useSectionObserver();
  
  return (
    <div id="menubar"
    className='hidden
     text-white
     text-sm
    lg:text-lg sm:flex sm:flex-row gap-2 pb-2
    '
    >

      <ThemeToggleButton
        className="mt-1.5"
        variant={"circle"}
        start={"top-left"}
        blur={false}
      />

    <button
      className={cn(buttonCN, `${activeSection === "Home" ? 'bg-slate-700' : ''}`)}
      onClick={ () => scrollToSection(refs.homeRef)}
      >
        Home
      </button>

      
    <button
      className={cn(buttonCN, `${activeSection === "Projects" ? 'bg-slate-700' : ''}`)}
      onClick={()=> scrollToSection(refs.projRef)}
      >
        Projects
      </button>

      <button
        className={cn(buttonCN, `${activeSection === "AboutMe" ?  'bg-slate-700' : ''}`)}
        onClick={()=> scrollToSection(refs.aboutRef)}
      >
        About Me
      </button>

      <button
        className={cn(buttonCN,  `${activeSection === "ContactMe" ?  'bg-slate-700' : ''}`)}
        onClick={()=> scrollToSection(refs.contactRef)}
      >
        Contact Me
      </button>


    </div>
  )
}

export default MenuBar