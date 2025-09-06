import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import SideBar from "./sidebar";
import MenuBar from "./menubar";
import { useScrollInitial } from "@/hooks/useScrollInitial";
// import { useScrollInitial } from "@/hooks/useScrollInitial";

export type sideBarStateType = "open" | "close"

function Header() {

  const [sideBarState, setSideBarState] = useState<sideBarStateType>("close");
  const {isScrolled} = useScrollInitial();


  return (
    <nav
    className={`
    flex flex-row justify-between
    mt-4 pt-2 text-2xl w-[100dvw]
    px-[5dvw]
    md:px-[10dvw]
    fixed top-0 z-50 transition-all duration-300
    ${ isScrolled ? "bg-slate-900/90" : "bg-slate-900/0"}
    `}
    >
      <button
      className="px-2 py-2 text-white
      hover:cursor-pointer
      md:text-4xl allura-regular"
      onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })} 
      >Manas</button>

      <button id="side-menu-opener"
      className="px-2 py-1  hover:cursor-pointer
      sm:hidden
      "
      onClick={()=>setSideBarState("open")}
      >
      <IoMdMenu
      fill="white"
      size={25}
      />
      </button>
      
      <div id="black-screen"
      onClick={()=>setSideBarState("close")}
      style={{
      display: `${sideBarState == "open" ? 'block' : 'none'}`,
      }}
      className="fixed bg-black/60 h-[100dvh] w-[100dvw] top-0 left-0"
      >
      </div>
    
      <SideBar sideBarState={sideBarState} setSideBarState={setSideBarState}/>

      <MenuBar />

    </nav>
  )
}

export default Header