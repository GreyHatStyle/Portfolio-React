

function MenuBar() {
  return (
    <div id="menubar"
    className='hidden
    sm:block
    text-xl
    '
    >
    
    <button
      className="px-5 py-2 hover:cursor-pointer hover:bg-slate-200 rounded-2xl"
     
      >
        Projects
      </button>

      <button
        className="px-5 py-2 hover:cursor-pointer hover:bg-slate-200 rounded-2xl"
      >
        About Me
      </button>

      <button
        className="px-5 py-2 hover:cursor-pointer hover:bg-slate-200 rounded-2xl"
      >
        Contact Me
      </button>


    </div>
  )
}

export default MenuBar