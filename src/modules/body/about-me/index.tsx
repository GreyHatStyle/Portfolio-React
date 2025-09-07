import type { ComponentProps } from "react"


interface AboutMeProps extends ComponentProps<"section">{
  ref: React.Ref<HTMLElement>
}

function AboutMe({
    ref,
}: AboutMeProps) {
  
    return (
    <section id="AboutMe"
    ref={ref}
     className='h-[100dvh] w-[100dvw] px-[10dvw]'>
        
    <h1
    className="pt-[5rem] text-6xl baloo-bhai-2"
    >ABOUT ME</h1>
        
    </section>
  )
}

export default AboutMe