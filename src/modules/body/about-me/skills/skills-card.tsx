import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

export interface SkillsCardProps {
    children: React.ReactNode
    hoverText: string
    className?: string
}

function SkillsCard({
    children,
    hoverText,
    className,
    ...props
}: SkillsCardProps & ComponentProps<"div">) {

  return (
    <Tooltip
    key={props.key}
    >

      <TooltipTrigger asChild>
        <div 
          className={cn("p-11 bg-neutral-100 border-2 rounded-2xl hover:cursor-pointer group dark:bg-neutral-800 dark:border-none", className)}>

            <div className="group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 text-center flex flex-col justify-center items-center">
              {children}
              {hoverText}
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