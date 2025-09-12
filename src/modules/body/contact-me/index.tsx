import type { ComponentProps } from "react"


interface ContactMeProps extends ComponentProps<"section">{
  ref: React.Ref<HTMLElement>
}

function ContactMe({
  ref,
}: ContactMeProps) {
  return (
     <section id="ContactMe"
     ref={ref}
    className='h-[100dvh] w-[100dvw] px-[10dvw]'
    >
      
      <h1
      className="pt-[5rem] text-5xl sm:text-6xl baloo-bhai-2"
      >CONTACT ME</h1>

    
    </section>
  )
}

export default ContactMe