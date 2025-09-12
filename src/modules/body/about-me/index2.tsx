import { useRef, useState, type ComponentProps } from "react"
import "./about-me-global.css"
import Skills from "./skills"
import Education from "./education"
import { cn } from "@/lib/utils"
import Certificates from "./certificates"
import Publishes from "./publishes"
import { useMobileDetection } from "@/hooks/useMobileDetect"

interface AboutMeProps extends ComponentProps<"section">{
  ref: React.Ref<HTMLElement>
}

type AboutSectionTypes = "skills" | "education" | "certificates" | "publishes"

function AboutMe({
    ref,
}: AboutMeProps) {

    const [currentSection, setCurSection] = useState<AboutSectionTypes>("skills");
    const contentRef = useRef<HTMLButtonElement>(null);
    const isMobile = useMobileDetection();

    const buttonCn = "bg-blue-400 px-4 py-2 text-white text-2xl poppins-font hover:cursor-pointer rounded-md hover:bg-blue-300 dark:bg-neutral-800 dark:hover:bg-neutral-700";

    const shadow_class_from_ui = "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

    const aboutButtonsClickHandle = (section: AboutSectionTypes) =>{
      setCurSection(section);
        if(isMobile){
          contentRef.current?.scrollIntoView({behavior: "smooth"});
        }
    }
  
    return (
    <section id="AboutMe"
    ref={ref}
     className='w-[100dvw] px-[10dvw]'>
        
    <h1
    className="pt-[5rem] text-5xl sm:text-6xl baloo-bhai-2"
    >ABOUT ME</h1>



      <div id="about-me-box"
      className="about-me-box-styles mt-11"
      >


        <div id="about-me-buttons"
        className={`bg-blue-50 flex flex-col gap-3 p-5 rounded-lg baloo-bhai-2
        dark:bg-neutral-900 ${shadow_class_from_ui}
        `} 
        
        >
          <h1 className="text-3xl">
            I am
          </h1>
          <h1 className="mb-2">
            A Fourth Year Student of B. Tech CSE, who likes to learn, explore and create new things every day!!
          </h1>

          <button className={cn(buttonCn, currentSection==="skills" ? "bg-blue-800 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-500 dark:text-black" : "")}
          onClick={() => aboutButtonsClickHandle("skills")}
          >
            Skills
          </button>

          <button className={cn(buttonCn, currentSection==="education" ? "bg-blue-800 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-500 dark:text-black" : "")}
          onClick={() => aboutButtonsClickHandle("education")}
          >
            Education
          </button>

          <button className={cn(buttonCn, currentSection==="certificates" ? "bg-blue-800 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-500 dark:text-black" : "")}
          onClick={() => aboutButtonsClickHandle("certificates")}
          >
            Certificates
          </button>

          <button 
          ref={contentRef}
          className={cn(buttonCn, currentSection==="publishes" ? "bg-blue-800 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-500 dark:text-black" : "")}
          onClick={() => aboutButtonsClickHandle("publishes")}
          >
            Publishes
          </button>

        </div>
          

        <div id="about-content"
        className={`bg-blue-50 overflow-y-hidden 
        dark:bg-neutral-900 rounded-md ${shadow_class_from_ui} 
        `}
        >
          {
            currentSection === "skills"
              ?
            <Skills/>
              :
              currentSection === "education"
                ?
                <Education />
                :
                  currentSection === "certificates"
                    ?
                    <Certificates/>
                    :
                    <Publishes />  
          }


        </div>


      </div>



        
    </section>
  )
}

export default AboutMe