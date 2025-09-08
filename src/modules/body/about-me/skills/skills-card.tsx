import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface SkillsCardProps {
    children: React.ReactNode
    hoverText: string
    className?: string
}

function SkillsCard({
    children,
    hoverText,
    className,
}: SkillsCardProps) {

  return (
    <Tooltip>

      <TooltipTrigger asChild>
        <div 
          className={cn("p-11 bg-blue-100 rounded-2xl flex flex-row justify-center items-center hover:cursor-pointer group", className)}>

            <div className="group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300">
              {children}

            </div>
        </div>
      </TooltipTrigger>

      <TooltipContent className="px-11 text-sm">
        <p>{hoverText}</p>
      </TooltipContent>
    </Tooltip>

  )
}

export default SkillsCard