import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"

type ProjectCardProps = {
    title: string,
    liveUrl?: string,
    imageUrl: string,
    githubUrl: string,
    children: React.ReactNode
}

function ProjectCard({
    title,
    liveUrl,
    imageUrl,
    githubUrl,
    children
}: ProjectCardProps) {

    const buttonCn = "px-4 py-2 bg-white text-black hover:cursor-pointer rounded-sm";


  return (
    <DirectionAwareHover
        className="xl:h-[70dvh] poppins-font"
        childrenClassName="flex flex-col h-full w-full p-4 gap-2"
        imageUrl={imageUrl}
        >

         <h1 className="text-2xl sm:text-4xl">{title}</h1>

         <div className="mt-1 flex flex-row flex-wrap gap-1">

            {children}

         </div>
          
            <div className="flex-1 flex flex-row items-end gap-3">
            {
                liveUrl && 
                <button 
                className={buttonCn}
                onClick={()=>window.open(liveUrl, "_blank")}
                >Live</button>
            }
            <button 
            className={buttonCn}
            onClick={()=>window.open(githubUrl, "_blank")}
            >Github</button>
          </div>
        </DirectionAwareHover>
  )
}

export default ProjectCard