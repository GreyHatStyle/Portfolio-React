import { usePagePosition } from "@/hooks/usePagePosition";
import { cn } from "@/lib/utils"

function MenuBar() {

  const buttonCN = "px-5 py-2 hover:cursor-pointer hover:bg-slate-700 rounded-4xl";

  const {pageName, pageScrollData} = usePagePosition();

  return (
    <div id="menubar"
    className='hidden
    sm:block text-white
    text-xl
    '
    >
    
    <button
      className={cn(buttonCN, `${pageName === "Home" ? 'bg-slate-700' : ''}`)}
      onClick={ () => window.scrollTo({
        top: pageScrollData["Home"],
        behavior: "smooth",
      })}
      >
        Home
      </button>

      
    <button
      className={cn(buttonCN, `${pageName === "Projects" ? 'bg-slate-700' : ''}`)}
      onClick={()=>window.scrollTo({
        top: pageScrollData["Projects"],
        behavior: "smooth"
      })}
      >
        Projects
      </button>

      <button
        className={cn(buttonCN, `${pageName === "AboutMe" ?  'bg-slate-700' : ''}`)}
        onClick={()=> window.scrollTo({
          top: pageScrollData["AboutMe"],
          behavior: "smooth",
        })}
      >
        About Me
      </button>

      <button
        onClick={()=>window.scrollTo({
          top: pageScrollData["ContactMe"],
          behavior: "smooth",
        })}
        className={cn(buttonCN,  `${pageName === "ContactMe" ?  'bg-slate-700' : ''}`)}
      >
        Contact Me
      </button>


    </div>
  )
}

export default MenuBar