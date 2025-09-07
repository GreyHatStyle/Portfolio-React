import type { ComponentProps } from "react"
import IntroCard from "./introCard"

interface FirstSectionProps extends ComponentProps<"section">{
  ref: React.Ref<HTMLElement>
} 

function FirstSection({
  ref,
}: FirstSectionProps) {
  return (
    <section 
    id="Home"
    ref={ref}
    className="
    bg-[url(/bg-image3.webp)] bg-cover
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
        

    </section>
  )
}

export default FirstSection