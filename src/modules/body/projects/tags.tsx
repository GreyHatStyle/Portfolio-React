import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

interface TagsProps extends ComponentProps<"span">{
    content: string
}

function Tags({
    content,
    ...props
}: TagsProps) {

  return (
    <span 
    {...props}
    className={
      cn(`
      text-black bg-white/90 
      px-2 py-1 rounded-3xl text-[0.7rem] sm:text-md
      
      `, props.className)}>
        {content}
    </span>
  )
}

export default Tags