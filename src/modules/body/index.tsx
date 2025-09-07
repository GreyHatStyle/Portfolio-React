import FirstSection from "./firstSection"
import Projects from "./projects"
import AboutMe from "./about-me"
import ContactMe from "./contact-me"
import { useSectionObserver } from "@/hooks/useSectionObserver";

function Body() {

  const {refs} = useSectionObserver();

  return (
    <div>

      <FirstSection ref={refs.homeRef}/>
      <Projects ref={refs.projRef}/>
      <AboutMe ref={refs.aboutRef}/>
      <ContactMe ref={refs.contactRef}/>
      
    </div>
  )
}

export default Body