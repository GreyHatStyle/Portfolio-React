import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { useState } from "react";

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

    const [isTapped, setIsTapped] = useState<boolean>(false);

    const buttonCn = "px-4 py-2 bg-white text-black hover:cursor-pointer rounded-sm";

    const handleTap = () => setIsTapped(!isTapped);


    /**
     * this function is particularly made to handle the mobile glitch, in which the user was able to open website even before just by clicking the image
     * @param url : URL you want to open after clicking this button
     * @returns 
     */
    const handleButtonClick = (url: string) => {
      
      // if(!isTapped){
      //     handleTap();
      //     return;
      // }
      window.open(url, "_blank");
    }

    console.log("tab: ", isTapped);

  return (
    <DirectionAwareHover
        isTapped={isTapped}
        onClick={handleTap}
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
                onClick={() => handleButtonClick(liveUrl)}
                >Live</button>
            }

            <button 
            className={buttonCn}
            onClick={() => handleButtonClick(githubUrl)}
            >Github</button>
          </div>
        </DirectionAwareHover>
  )
}

export default ProjectCard