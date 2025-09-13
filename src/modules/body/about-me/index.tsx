import { useRef, useState, type ComponentProps } from "react"
import "./about-me-global.css"
import Skills from "./skills"
import Education from "./education"
import { cn } from "@/lib/utils"
import Certificates from "./certificates"
import Publishes from "./publishes"
import { useNavigationStore } from "@/store/useNavigationStore"

interface AboutMeProps extends ComponentProps<"section">{
  ref: React.Ref<HTMLElement>
}

type AboutSectionTypes = "skills" | "education" | "certificates" | "publishes"

function AboutMe({
    ref,
}: AboutMeProps) {

    const [currentSection, setCurSection] = useState<AboutSectionTypes>("skills");
    const contentRef = useRef<HTMLButtonElement>(null);
    const { refs, activeSection, scrollToSection } = useNavigationStore();
    
    const shadow_class_from_ui = "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";
    
    const buttonCn = `bg-neutral-100 border-2 px-4 py-2 text-black text-2xl poppins-font hover:cursor-pointer rounded-md hover:bg-neutral-200 hover:border-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-none dark:text-white`;
    
    const aboutButtonsClickHandle = (section: AboutSectionTypes) =>{
      setCurSection(section);
        if(window.innerWidth < 761){
          contentRef.current?.scrollIntoView({behavior: "smooth"});
        }
        console.log("Window innerW: ", window.innerWidth )
    }
    
    return (
    <section id="AboutMe"
    ref={ref}
     className='w-[100dvw] px-[10dvw] md:h-[100dvh]'>
        
    <h1
    className="pt-[5rem] text-5xl sm:text-6xl baloo-bhai-2"
    >ABOUT ME</h1>

    <button
    className={`${activeSection === "AboutMe" ? "block": "hidden"}
    flex flex-row items-center font-bold text-white
    md:hidden fixed bg-blue-500 py-2 px-4 rounded-full
    hover:cursor-pointer 
    bottom-8 right-4 z-50 ${shadow_class_from_ui}
    `}
    onClick={() => scrollToSection(refs.aboutRef)}
    >
      About Me
      <svg className="fill-white"
      xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" ><path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"/></svg>

    </button>

      <div id="about-me-box"
      className="about-me-box-styles mt-11"
      >


        <div id="about-me-buttons"
        className={`bg-white flex flex-col gap-3 p-5 rounded-lg baloo-bhai-2
        dark:bg-neutral-900 ${shadow_class_from_ui} dark:shadow-none
        `} 
        
        >
          <h1 className="text-4xl dark:text-blue-400">
            I am
          </h1>
          <h1 className="mb-2">
            A Fourth Year Student of B. Tech CSE, who likes to learn, explore and create new things every day!!
          </h1>

          <button className={cn(buttonCn, currentSection==="skills" ? "bg-neutral-800 dark:bg-blue-500 hover:bg-neutral-800 dark:hover:bg-blue-500 dark:text-black text-white" : "")}
          onClick={() => aboutButtonsClickHandle("skills")}
          >
            Skills
          </button>

          <button className={cn(buttonCn, currentSection==="education" ? "bg-neutral-800 dark:bg-blue-500 hover:bg-neutral-800 dark:hover:bg-blue-500 dark:text-black text-white" : "")}
          onClick={() => aboutButtonsClickHandle("education")}
          >
            Education
          </button>

          <button className={cn(buttonCn, currentSection==="certificates" ? "bg-neutral-800 dark:bg-blue-500 hover:bg-neutral-800 dark:hover:bg-blue-500 dark:text-black text-white" : "")}
          onClick={() => aboutButtonsClickHandle("certificates")}
          >
            Certificates
          </button>

          <button 
          ref={contentRef}
          className={cn(buttonCn, currentSection==="publishes" ? "bg-neutral-800 dark:bg-blue-500 hover:bg-neutral-800 dark:hover:bg-blue-500 dark:text-black text-white" : "")}
          onClick={() => aboutButtonsClickHandle("publishes")}
          >
            Publishes
          </button>

        </div>
          

        <div id="about-content"
        className={`bg-white overflow-y-hidden ${shadow_class_from_ui} rounded-md 
        dark:bg-neutral-900 dark:shadow-none
        `}
        >
          {/* Changed the way to optimize the flow (component prakat aur gaayab hone se accha ha hidden rahe) */}

          {
          <>
            <Skills className={`${currentSection==="skills" ? 'block' : 'hidden'}`} />
            
            {/* For because of using hidden this component was glitching in useScroll internally so used this instead */}
            {currentSection === "education" && <Education />}

            <Education className={`${currentSection==="education" ? 'block' : 'hidden'}`} />
            <Certificates className={`${currentSection==="certificates" ? 'block' : 'hidden'}`} />

            <Publishes className={`${currentSection==="publishes" ? 'block' : 'hidden'}`} />
          </>
          }


        </div>


      </div>



        
    </section>
  )
}

export default AboutMe