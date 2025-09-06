import IntroCard from "./introCard"


function FirstSection() {
  return (
    <div
    className="
    bg-[url(/bg-image3.png)] bg-cover
    bg-right lg:bg-top
    h-[100dvh] w-[100dvw]"
    >

      <div
        id="picture-cover"
        className="
          h-[100dvh] w-[100dvw]
          bg-gradient-to-r from-slate-950 to-slate-950/60
          flex flex-row items-center
        "
      >
        
        <IntroCard/>

      </div>
        

    </div>
  )
}

export default FirstSection