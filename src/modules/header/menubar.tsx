import { useScrollInitial } from "@/hooks/useScrollInitial";
import { cn } from "@/lib/utils"

function MenuBar() {

  const buttonCN = "px-5 py-2 hover:cursor-pointer hover:bg-slate-700 rounded-4xl";

  const {isScrolled} = useScrollInitial();

  return (
    <div id="menubar"
    className='hidden
    sm:block text-white
    text-xl
    '
    >
    
    <button
      className={cn(buttonCN, `${isScrolled ? '' : 'bg-slate-700'}`)}
      onClick={ () => window.scrollTo({
        top: 0,
        behavior: "smooth",
      })}
      >
        Home
      </button>
    <button
      className={cn(buttonCN, "")}
     
      >
        Projects
      </button>

      <button
        className={cn(buttonCN, "")}
      >
        About Me
      </button>

      <button
        className={cn(buttonCN, "")}
      >
        Contact Me
      </button>


    </div>
  )
}

export default MenuBar