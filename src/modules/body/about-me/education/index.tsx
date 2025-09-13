import { cn } from "@/lib/utils"
import { EducationTimeline } from "./edu-timeline"

type EducationProps = {
  className?: string
}


function Education({
  className,
}: EducationProps) {
  return (
    
    <div id="education-section"
    className={cn("p-6", className)}
    >

      <div className="flex flex-col gap-2 mb-4">
            <h1 className="text-4xl baloo-bhai-2 dark:text-blue-400">My Education</h1>
            <p></p>

      </div>

      
      <EducationTimeline />
      

    </div>
  )
}

export default Education