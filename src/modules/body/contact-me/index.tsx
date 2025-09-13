import type { ComponentProps } from "react"
import ContactForm from "./contact-form"
import OtherInfo from "./other-info"


interface ContactMeProps extends ComponentProps<"section">{
  ref: React.Ref<HTMLElement>
}

function ContactMe({
  ref,
}: ContactMeProps) {
  return (
     <section id="ContactMe"
     ref={ref}
    className='w-[100dvw] px-[10dvw]'
    >
      
      <h1
      className="pt-[5rem] text-5xl sm:text-6xl baloo-bhai-2"
      >CONTACT ME</h1>

      
      <div id="contact-content"
      className="w-full mt-[3rem] mb-[4rem] lg:mt-auto gap-[5rem]
      flex flex-col-reverse lg:flex-row items-center">

        <ContactForm />

        <OtherInfo />

      </div>


    
    </section>
  )
}

export default ContactMe