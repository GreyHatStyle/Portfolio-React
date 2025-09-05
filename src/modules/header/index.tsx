import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import SideBar from "./sidebar";
import MenuBar from "./menubar";

export type sideBarStateType = "open" | "close"

function Header() {

  const [sideBarState, setSideBarState] = useState<sideBarStateType>("close");

  return (
    <nav
    className="
    flex flex-row justify-between
    mt-4 text-2xl
    mx-[5dvw]
    md:mx-[10dvw]

    "
    >
      <button
      className="px-2 py-2 
      hover:cursor-pointer
      md:text-3xl " 
      >Manas Bisht</button>

      <button id="side-menu-opener"
      className="px-2 py-1  hover:cursor-pointer
      sm:hidden
      "
      onClick={()=>setSideBarState("open")}
      >
        <IoMdMenu
        size={25}
        />
      </button>
      
      <div id="black-screen"
      onClick={()=>setSideBarState("close")}
      style={{
        display: `${sideBarState == "open" ? 'block' : 'none'}`,
      }}
      className="absolute bg-black/60 h-[100dvh] w-[100dvw] top-0 left-0"
      >
      </div>
    
      <SideBar sideBarState={sideBarState} setSideBarState={setSideBarState}/>

      <MenuBar />

    </nav>
  )
}

export default Header