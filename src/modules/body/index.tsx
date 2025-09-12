import FirstSection from "./firstSection"
import Projects from "./projects"
import AboutMe from "./about-me"
import ContactMe from "./contact-me"
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { useRef } from "react";


function Body() {

  const homeRef = useRef<HTMLElement>(null);
  const projRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useSectionObserver({
    homeRef,
    projRef,
    aboutRef,
    contactRef
  });

  return (
    <div>

      <FirstSection ref={homeRef}/>
      <Projects ref={projRef}/>
      <AboutMe ref={aboutRef}/>
      <ContactMe ref={contactRef}/>
      
    </div>
  )
}

export default Body