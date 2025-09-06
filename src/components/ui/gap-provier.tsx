import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

interface GapProviderType extends ComponentProps<"div"> {
    pixels?: number
}

function GapProvider({
    pixels,
    ...props
}: GapProviderType) {
  return (
    <div
      style={{
        marginTop: pixels,
        marginBottom: pixels,
        ...props.style,
      }}
      {...props}
      className={cn("", props.className)}
    >
      {props.children}
    </div>
  )
}

export default GapProvider