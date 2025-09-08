import type { ComponentProps } from "react"
import ProjectsGrid from "./projects-grid"

interface ProjectsType extends ComponentProps<"section">{
  ref: React.Ref<HTMLElement>
}

function Projects({
  ref,
}: ProjectsType) {
  return (
    <section 
    id="Projects"
    ref={ref}
    className=' w-[100dvw] px-[10dvw]'
    >
      
      <h1
      className="pt-[5rem] text-5xl sm:text-6xl baloo-bhai-2"
      >PROJECTS</h1>


      <ProjectsGrid />
    
    </section>
  )
}

export default Projects